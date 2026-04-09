import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Box } from "@mantine/core";
import { FFT_LENGTH, HOP_LENGTH } from "./const";
import type { StreamingDecodeSegment } from "./hooks/useStreamingDecode";
import { runInferencePlain } from "./utils/inference";
import type { InferenceBackend } from "./utils/inferenceProtocol";

const BOTTOM_TOLERANCE_PX = 4;
const DEFAULT_HEIGHT_PX = 84;
const POPUP_MARGIN_PX = 12;
const POPUP_OFFSET_PX = 4;
const POPUP_ARROW_SIZE_PX = 6;
const POPUP_ARROW_INSET_PX = 18;
const POPUP_BACKGROUND_COLOR = "var(--mantine-color-dark-8)";
const POPUP_SPINNER_ACCENT_COLOR = "rgba(88, 186, 255, 0.95)";
const PENDING_TEXT_COLOR = "var(--mantine-color-gray-6)";

type TranscriptVariant = "en" | "ja";
type PopupInteraction = "hover" | "press";

type StreamingTranscriptDisplayProps = {
  segments: StreamingDecodeSegment[];
  pendingText?: string;
  variant: TranscriptVariant;
  backgroundColor: string;
  backend: InferenceBackend;
  enableRedecodePopup?: boolean;
  height?: number;
};

type RedecodeToken = {
  id: string;
  audioBuffer: Float32Array;
  filterFreq: number | null;
  filterWidth: number;
  startSample: number;
  endSample: number;
};

type RenderedPart = {
  id: string;
  text: string;
  interactive: boolean;
  token: RedecodeToken | null;
};

type PopupPosition = {
  left: number;
  top: number;
  placement: "top" | "bottom";
  horizontalAlign: "start" | "center" | "end";
};

type PopupState = PopupPosition & {
  tokenId: string;
  text: string;
  loading: boolean;
  interaction: PopupInteraction;
};

function isSamePopupPosition(
  currentPopupState: PopupState,
  nextPosition: PopupPosition,
): boolean {
  return (
    currentPopupState.left === nextPosition.left &&
    currentPopupState.top === nextPosition.top &&
    currentPopupState.placement === nextPosition.placement &&
    currentPopupState.horizontalAlign === nextPosition.horizontalAlign
  );
}

function isScrolledToBottom(element: HTMLElement): boolean {
  return (
    element.scrollHeight - element.scrollTop - element.clientHeight <=
    BOTTOM_TOLERANCE_PX
  );
}

function isWhitespaceChar(char: string): boolean {
  return /\s/.test(char);
}

function isPunctuationChar(char: string): boolean {
  return /[.,!?;:'"`()[\]{}、。「」]/u.test(char) || char === "（" || char === "）";
}

function isInteractiveToken(text: string): boolean {
  return /[0-9A-Za-zァ-ヶ゛゜ー]/u.test(text);
}

function normalizePopupText(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized || "(no English match)";
}

function getAnchorRect(
  anchorElement: HTMLElement,
  pointerX?: number,
): DOMRect {
  const clientRects = Array.from(anchorElement.getClientRects());
  if (clientRects.length === 0) {
    return anchorElement.getBoundingClientRect();
  }

  if (pointerX == null) {
    return clientRects[0];
  }

  const containingRect = clientRects.find(
    (rect) => pointerX >= rect.left && pointerX <= rect.right,
  );
  if (containingRect) {
    return containingRect;
  }

  return clientRects.reduce((closestRect, rect) => {
    const closestDistance = Math.abs(
      pointerX - (closestRect.left + closestRect.width / 2),
    );
    const nextDistance = Math.abs(pointerX - (rect.left + rect.width / 2));
    return nextDistance < closestDistance ? rect : closestRect;
  });
}

function getPopupPosition(
  anchorElement: HTMLElement,
  popupWidth: number,
  pointerX?: number,
): PopupPosition {
  const rect = getAnchorRect(anchorElement, pointerX);
  const anchorCenter = rect.left + rect.width / 2;
  const showBelow =
    rect.top < 72 && window.innerHeight - rect.bottom > rect.top;
  const idealLeft = anchorCenter - popupWidth / 2;
  const minLeft = POPUP_MARGIN_PX;
  const maxLeft = window.innerWidth - popupWidth - POPUP_MARGIN_PX;

  if (idealLeft <= minLeft) {
    return {
      left: Math.max(rect.left, POPUP_MARGIN_PX),
      top: showBelow ? rect.bottom + POPUP_OFFSET_PX : rect.top - POPUP_OFFSET_PX,
      placement: showBelow ? "bottom" : "top",
      horizontalAlign: "start",
    };
  }

  if (idealLeft >= maxLeft) {
    return {
      left: Math.min(rect.right, window.innerWidth - POPUP_MARGIN_PX),
      top: showBelow ? rect.bottom + POPUP_OFFSET_PX : rect.top - POPUP_OFFSET_PX,
      placement: showBelow ? "bottom" : "top",
      horizontalAlign: "end",
    };
  }

  return {
    left: anchorCenter,
    top: showBelow ? rect.bottom + POPUP_OFFSET_PX : rect.top - POPUP_OFFSET_PX,
    placement: showBelow ? "bottom" : "top",
    horizontalAlign: "center",
  };
}

function getFrameEndSample(frame: number): number {
  return frame * HOP_LENGTH + FFT_LENGTH;
}

function getSpanMidpointSample(startFrame: number, endFrame: number): number {
  const midFrame = (startFrame + endFrame) / 2;
  return Math.round(midFrame * HOP_LENGTH + FFT_LENGTH / 2);
}

function getRedecodeAudioSlice(token: RedecodeToken): Float32Array {
  const bufferLength = token.audioBuffer.length;
  if (bufferLength === 0) {
    return token.audioBuffer;
  }

  const startSample = Math.max(0, Math.min(token.startSample, bufferLength));
  const endSample = Math.min(
    bufferLength,
    Math.max(startSample + FFT_LENGTH, token.endSample),
  );

  if (endSample <= startSample) {
    return token.audioBuffer.slice(startSample, endSample);
  }

  return token.audioBuffer.slice(startSample, endSample);
}

function getPopupArrowStyle(popupState: PopupState): CSSProperties {
  const horizontalStyle =
    popupState.horizontalAlign === "start"
      ? { left: `${POPUP_ARROW_INSET_PX}px` }
      : popupState.horizontalAlign === "end"
      ? { right: `${POPUP_ARROW_INSET_PX}px` }
      : { left: "50%", transform: "translateX(-50%)" };

  if (popupState.placement === "top") {
    return {
      ...horizontalStyle,
      position: "absolute",
      bottom: `-${POPUP_ARROW_SIZE_PX}px`,
      width: 0,
      height: 0,
      borderLeft: `${POPUP_ARROW_SIZE_PX}px solid transparent`,
      borderRight: `${POPUP_ARROW_SIZE_PX}px solid transparent`,
      borderTop: `${POPUP_ARROW_SIZE_PX}px solid ${POPUP_BACKGROUND_COLOR}`,
    };
  }

  return {
    ...horizontalStyle,
    position: "absolute",
    top: `-${POPUP_ARROW_SIZE_PX}px`,
    width: 0,
    height: 0,
    borderLeft: `${POPUP_ARROW_SIZE_PX}px solid transparent`,
    borderRight: `${POPUP_ARROW_SIZE_PX}px solid transparent`,
    borderBottom: `${POPUP_ARROW_SIZE_PX}px solid ${POPUP_BACKGROUND_COLOR}`,
  };
}

function PopupLoadingSpinner() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "20px",
        minHeight: "18px",
        padding: "2px 0",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "16px",
          height: "16px",
          borderRadius: "999px",
          border: "2px solid rgba(255, 255, 255, 0.12)",
          borderTopColor: POPUP_SPINNER_ACCENT_COLOR,
          borderRightColor: "rgba(88, 186, 255, 0.45)",
          borderBottomColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 12px rgba(88, 186, 255, 0.2)",
          animation: "popup-spinner-rotate 900ms linear infinite",
        }}
      />
    </div>
  );
}

function buildRenderedParts(
  segments: StreamingDecodeSegment[],
  variant: TranscriptVariant,
  enableRedecodePopup: boolean,
): RenderedPart[] {
  const parts: RenderedPart[] = [];
  let hasPreviousText = false;

  segments.forEach((segment) => {
    const lane = variant === "en" ? segment.en : segment.ja;
    if (!lane?.text) {
      return;
    }

    if (hasPreviousText) {
      parts.push({
        id: `segment-gap-${variant}-${segment.id}`,
        text: " ",
        interactive: false,
        token: null,
      });
    }
    hasPreviousText = true;

    const chars = Array.from(lane.text);
    if (chars.length !== lane.characterSpans.length) {
      parts.push({
        id: `segment-${variant}-${segment.id}`,
        text: lane.text,
        interactive: false,
        token: null,
      });
      return;
    }

    let currentChars: string[] = [];
    let currentStartSample: number | null = null;
    let currentEndSample: number | null = null;
    let currentStartIndex = -1;
    let nextTokenStartSample = 0;

    const flushCurrentToken = (
      endIndex: number,
      boundaryEndSample?: number,
    ) => {
      if (
        currentChars.length === 0 ||
        currentStartSample == null ||
        currentEndSample == null
      ) {
        return;
      }

      const text = currentChars.join("");
      const tokenId = `${segment.id}:${variant}:${currentStartIndex}-${endIndex}`;
      const segmentAudioBuffer = segment.audioBuffer;
      const tokenEndSample =
        boundaryEndSample == null
          ? currentEndSample
          : Math.max(currentEndSample, boundaryEndSample);
      const interactive =
        enableRedecodePopup &&
        segmentAudioBuffer != null &&
        isInteractiveToken(text);

      parts.push({
        id: tokenId,
        text,
        interactive,
            token: interactive
          ? {
              id: tokenId,
              audioBuffer: segmentAudioBuffer,
              filterFreq: segment.filterFreq,
              filterWidth: segment.filterWidth,
              startSample: currentStartSample,
              endSample: tokenEndSample,
            }
          : null,
      });

      currentChars = [];
      currentStartSample = null;
      currentEndSample = null;
      currentStartIndex = -1;
    };

    chars.forEach((char, index) => {
      const span = lane.characterSpans[index];
      if (!span) {
        return;
      }

      if (isWhitespaceChar(char)) {
        const splitSample = getSpanMidpointSample(
          span.startFrame,
          span.endFrame,
        );
        flushCurrentToken(index - 1, splitSample);
        nextTokenStartSample = splitSample;
        parts.push({
          id: `${segment.id}:${variant}:space-${index}`,
          text: " ",
          interactive: false,
          token: null,
        });
        return;
      }

      if (isPunctuationChar(char)) {
        flushCurrentToken(index - 1);
        nextTokenStartSample = getFrameEndSample(span.endFrame);
        parts.push({
          id: `${segment.id}:${variant}:punct-${index}`,
          text: char,
          interactive: false,
          token: null,
        });
        return;
      }

      if (currentChars.length === 0) {
        currentStartSample = nextTokenStartSample;
        currentStartIndex = index;
      }

      currentChars.push(char);
      currentEndSample = getFrameEndSample(span.endFrame);
    });

    flushCurrentToken(chars.length - 1);
  });

  return parts;
}

export const StreamingTranscriptDisplay = ({
  segments,
  pendingText = "",
  variant,
  backgroundColor,
  backend,
  enableRedecodePopup = false,
  height = DEFAULT_HEIGHT_PX,
}: StreamingTranscriptDisplayProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const activeAnchorRef = useRef<HTMLElement | null>(null);
  const activeTokenRef = useRef<RedecodeToken | null>(null);
  const activePointerXRef = useRef<number | null>(null);
  const popupCacheRef = useRef(new Map<string, string>());
  const requestSequenceRef = useRef(0);

  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [popupState, setPopupState] = useState<PopupState | null>(null);

  const renderedParts = useMemo(
    () => buildRenderedParts(segments, variant, enableRedecodePopup),
    [enableRedecodePopup, segments, variant],
  );
  const renderedPendingText =
    pendingText && renderedParts.length > 0 ? ` ${pendingText}` : pendingText;

  useEffect(() => {
    popupCacheRef.current.clear();
    activeAnchorRef.current = null;
    activeTokenRef.current = null;
    activePointerXRef.current = null;
    setPopupState(null);
  }, [backend]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !isAutoScrollEnabled) {
      return;
    }

    element.scrollTop = element.scrollHeight;
  }, [isAutoScrollEnabled, renderedParts, renderedPendingText]);

  useEffect(() => {
    const interactiveTokenIds = new Set(
      renderedParts
        .filter((part) => part.interactive && part.token)
        .map((part) => part.id),
    );
    const popupCache = popupCacheRef.current;

    for (const tokenId of popupCache.keys()) {
      if (!interactiveTokenIds.has(tokenId)) {
        popupCache.delete(tokenId);
      }
    }

    if (!popupState) {
      return;
    }

    const anchorElement = activeAnchorRef.current;
    const activePart = renderedParts.find((part) => part.id === popupState.tokenId);
    if (
      !anchorElement ||
      !anchorElement.isConnected ||
      !activePart ||
      !activePart.interactive ||
      !activePart.token
    ) {
      activeAnchorRef.current = null;
      activeTokenRef.current = null;
      activePointerXRef.current = null;
      setPopupState(null);
    }
  }, [popupState, renderedParts]);

  useEffect(() => {
    if (!popupState) {
      return;
    }

    const updatePosition = () => {
      const anchorElement = activeAnchorRef.current;
      if (!anchorElement || !anchorElement.isConnected) {
        activeAnchorRef.current = null;
        activeTokenRef.current = null;
        activePointerXRef.current = null;
        setPopupState(null);
        return;
      }

      const popupWidth = popupRef.current?.offsetWidth ?? 280;
      const nextPosition = getPopupPosition(
        anchorElement,
        popupWidth,
        activePointerXRef.current ?? undefined,
      );
      setPopupState((currentPopupState) =>
        currentPopupState
          ? isSamePopupPosition(currentPopupState, nextPosition)
            ? currentPopupState
            : {
                ...currentPopupState,
                ...nextPosition,
              }
          : currentPopupState,
      );
    };

    const containerElement = containerRef.current;
    containerElement?.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    updatePosition();

    return () => {
      containerElement?.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [popupState]);

  useEffect(() => {
    if (!popupState || popupState.interaction !== "press") {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) {
        return;
      }

      if (popupRef.current?.contains(targetNode)) {
        return;
      }

      if (activeAnchorRef.current?.contains(targetNode)) {
        return;
      }

      activeAnchorRef.current = null;
      activeTokenRef.current = null;
      activePointerXRef.current = null;
      setPopupState(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [popupState]);

  const openPopupForToken = (
    token: RedecodeToken,
    anchorElement: HTMLElement,
    interaction: PopupInteraction,
    pointerX?: number,
  ) => {
    activeAnchorRef.current = anchorElement;
    activeTokenRef.current = token;
    activePointerXRef.current = pointerX ?? null;

    const cachedText = popupCacheRef.current.get(token.id);
    const popupWidth = popupRef.current?.offsetWidth ?? 280;
    setPopupState({
      tokenId: token.id,
      text: cachedText ?? "",
      loading: cachedText == null,
      interaction,
      ...getPopupPosition(anchorElement, popupWidth, pointerX),
    });

    if (cachedText != null) {
      return;
    }

    const requestSequence = ++requestSequenceRef.current;
    const audioSlice = getRedecodeAudioSlice(token);

    void runInferencePlain(
      audioSlice,
      token.filterFreq,
      token.filterWidth,
      { lang: "en", backend },
    )
      .then((decodedText) => {
        const normalizedText = normalizePopupText(decodedText);
        popupCacheRef.current.set(token.id, normalizedText);

        if (
          requestSequence !== requestSequenceRef.current ||
          activeTokenRef.current?.id !== token.id
        ) {
          return;
        }

        setPopupState((currentPopupState) =>
          currentPopupState?.tokenId === token.id
            ? {
                ...currentPopupState,
                text: normalizedText,
                loading: false,
              }
            : currentPopupState,
        );
      })
      .catch(() => {
        const fallbackText = "(English re-decode failed)";
        popupCacheRef.current.set(token.id, fallbackText);

        if (
          requestSequence !== requestSequenceRef.current ||
          activeTokenRef.current?.id !== token.id
        ) {
          return;
        }

        setPopupState((currentPopupState) =>
          currentPopupState?.tokenId === token.id
            ? {
                ...currentPopupState,
                text: fallbackText,
                loading: false,
              }
            : currentPopupState,
        );
      });
  };

  return (
    <Box pos="relative">
      <div
        ref={containerRef}
        spellCheck={false}
        role="textbox"
        aria-multiline="true"
        aria-readonly="true"
        onBeforeInput={(event) => event.preventDefault()}
        onPaste={(event) => event.preventDefault()}
        onScroll={() => {
          const element = containerRef.current;
          if (!element) {
            return;
          }

          setIsAutoScrollEnabled(isScrolledToBottom(element));
        }}
        style={{
          minHeight: `${height}px`,
          maxHeight: `${height}px`,
          overflowY: "auto",
          padding: "10px 12px",
          backgroundColor,
          color: "var(--mantine-color-text)",
          fontFamily: "var(--mantine-font-family-monospace)",
          lineHeight: 1.4,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          outline: "none",
          borderTop: "1px solid var(--mantine-color-dark-8)",
        }}
      >
        {renderedParts.map((part) =>
          part.interactive && part.token ? (
            <span
              key={part.id}
              onMouseEnter={(event) =>
                openPopupForToken(
                  part.token!,
                  event.currentTarget,
                  "hover",
                  event.clientX,
                )
              }
              onMouseLeave={() => {
                setPopupState((currentPopupState) => {
                  if (
                    currentPopupState?.tokenId !== part.id ||
                    currentPopupState.interaction !== "hover"
                  ) {
                    return currentPopupState;
                  }

                  activeAnchorRef.current = null;
                  activeTokenRef.current = null;
                  activePointerXRef.current = null;
                  return null;
                });
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();

                if (
                  popupState?.tokenId === part.id &&
                  popupState.interaction === "press"
                ) {
                  activeAnchorRef.current = null;
                  activeTokenRef.current = null;
                  activePointerXRef.current = null;
                  setPopupState(null);
                  return;
                }

                openPopupForToken(
                  part.token!,
                  event.currentTarget,
                  "press",
                  event.clientX,
                );
              }}
              style={{
                cursor: "pointer",
                borderRadius: "3px",
                backgroundColor:
                  popupState?.tokenId === part.id
                    ? "rgba(88, 186, 255, 0.16)"
                    : "transparent",
                transition: "background-color 120ms ease",
              }}
            >
              {part.text}
            </span>
          ) : (
            <span key={part.id}>{part.text}</span>
          ),
        )}
        {renderedPendingText && (
          <span
            style={{
              color: PENDING_TEXT_COLOR,
              opacity: 0.8,
            }}
          >
            {renderedPendingText}
          </span>
        )}
      </div>

      {popupState && (
        <div
          ref={popupRef}
          style={{
            position: "fixed",
            left: `${popupState.left}px`,
            top: `${popupState.top}px`,
            transform:
              popupState.horizontalAlign === "start"
                ? popupState.placement === "top"
                  ? "translate(0, -100%)"
                  : "translate(0, 0)"
                : popupState.horizontalAlign === "end"
                ? popupState.placement === "top"
                  ? "translate(-100%, -100%)"
                  : "translate(-100%, 0)"
                : popupState.placement === "top"
                ? "translate(-50%, -100%)"
                : "translate(-50%, 0)",
            maxWidth: "min(280px, calc(100vw - 24px))",
            borderRadius: "6px",
            padding: "2px 8px",
            backgroundColor: POPUP_BACKGROUND_COLOR,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.35)",
            color: "#ffffff",
            fontFamily: "var(--mantine-font-family-monospace)",
            fontSize: "13px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            zIndex: 300,
            pointerEvents: "none",
          }}
        >
          <div style={getPopupArrowStyle(popupState)} />
          {popupState.loading ? <PopupLoadingSpinner /> : popupState.text}
        </div>
      )}
    </Box>
  );
};
