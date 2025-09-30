export function hslToRgb(
  h: number,
  s: number,
  l: number
): [number, number, number] {
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function buildColorLUT(): Array<[number, number, number]> {
  const lut: Array<[number, number, number]> = new Array(256);

  for (let v = 0; v < 256; v++) {
    let t = v / 255;

    const gamma = 2.2;
    t = Math.pow(t, gamma);

    const hue = (220 * (1 - t)) / 360;
    const sat = 1.0;
    const light = 0.15 + 0.75 * t;

    lut[v] = hslToRgb(hue, sat, light);
  }

  return lut;
}
