function hslToRgb(h, s, l) {
    let r, g, b;
    if(s === 0){
        r = g = b = l; // achromatic
    }else{
        const hue2rgb = (p, q, t) => {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rainbowConsoleText(text, saturation = 100, lightness = 50, repetitionsPerString = 2) {
    saturation /= 100; // scale down to range [0, 1]
    lightness /= 100; // scale down to range [0, 1]
    let output = '';
    for(let i = 0; i < text.length; i++) {
        let hue = (i / text.length * repetitionsPerString) % 1; // scale to range [0, 1]
        let [r, g, b] = hslToRgb(hue, saturation, lightness);
        output += `\x1b[38;2;${r};${g};${b}m${text[i]}`;
    }
    output += '\x1b[0m'; // reset color
    return output
}

module.exports = rainbowConsoleText;

//console.log(rainbowConsoleText('Hello, world!'));