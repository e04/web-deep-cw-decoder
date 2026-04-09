import { useEffect, useRef, useState } from "react";

const BOTTOM_TOLERANCE_PX = 4;

function isScrolledToBottom(element: HTMLTextAreaElement): boolean {
  return (
    element.scrollHeight - element.scrollTop - element.clientHeight <=
    BOTTOM_TOLERANCE_PX
  );
}

type UseTextareaAutoScrollParams = {
  value: string;
};

export const useTextareaAutoScroll = ({
  value,
}: UseTextareaAutoScrollParams) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const element = textareaRef.current;
    if (!element || !isAutoScrollEnabled) {
      return;
    }

    element.scrollTop = element.scrollHeight;
  }, [isAutoScrollEnabled, value]);

  const handleScroll = () => {
    const element = textareaRef.current;
    if (!element) {
      return;
    }

    setIsAutoScrollEnabled(isScrolledToBottom(element));
  };

  return {
    textareaRef,
    handleScroll,
  };
};
