const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");
const fileContent = fs.readFileSync(filePath, "utf8");

// part 1
result = 0;

const lines = fileContent.split("\n");
const width = lines[0].length;
const regex = /(\d+)/g;
const symbols = "*-%$=@#/&+";

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

lines.forEach((line, i) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
        let count = false;
        const x_begin = clamp(match.index - 1, 0, width);
        const x_end = clamp(match.index + match[0].length, 0, width);
        const y_begin = clamp(i - 1, 0, lines.length);
        const y_end = clamp(i + 1, 0, lines.length);

        for (let y = y_begin; y <= y_end; y++) {
            for (let x = x_begin; x <= x_end; x++) {
                if (symbols.includes(lines[y][x])) count = true;
            }
        }
        if (count) result += +match[0];
    }
});

console.log(`Part 1 answer is: ${result}`);

// part2
result = 0;
let stars = new Map();
lines.forEach((line, i) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
        const x_begin = clamp(match.index - 1, 0, width);
        const x_end = clamp(match.index + match[0].length, 0, width);
        const y_begin = clamp(i - 1, 0, lines.length);
        const y_end = clamp(i + 1, 0, lines.length);

        for (let y = y_begin; y <= y_end; y++) {
            for (let x = x_begin; x <= x_end; x++) {
                if (lines[y][x] == "*") {
                    let key = JSON.stringify([x, y]);
                    if (!stars.has(key)) {
                        stars.set(key, []);
                    }
                    let currentValue = stars.get(key);
                    currentValue.push(+match[0]);
                    stars.set(key, currentValue);
                }
            }
        }
    }
});

stars.forEach((value, key) => {
    if (value.length == 2) {
        result += value[0] * value[1];
    }
});

console.log(`Part 2 answer is: ${result}`);
