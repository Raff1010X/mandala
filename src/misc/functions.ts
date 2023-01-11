export function distance(x: number, y: number, x1: number, y1: number): number {
    return Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
}

export function getColor(hue: number) {
    const color = hslToRgb(hue / 360, 1, 0.5);
    return (
        '#' +
        componentToHex(color[0]) +
        componentToHex(color[1]) +
        componentToHex(color[2])
    );
    // return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function componentToHex(c: number) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function hslToRgb(h: number, s: number, l: number) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}