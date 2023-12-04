const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");
const fileContent = fs.readFileSync(filePath, "utf8");

// part1

result = 0;

fileContent.split("\n").forEach((line) => {
    if (!line) return;
    const id = +/Game (\d+)/.exec(line)[1];
    let possible = true;
    line.match(/(\d+) green/g).forEach((val) => {
        if (+val.split(" ")[0] > 13) possible = false;
    });
    line.match(/(\d+) blue/g).forEach((val) => {
        if (+val.split(" ")[0] > 14) possible = false;
    });
    line.match(/(\d+) red/g).forEach((val) => {
        if (+val.split(" ")[0] > 12) possible = false;
    });

    if (!possible) return;
    result += id;
});

console.log(`Part 1 answer is: ${result}`);

// part2
result = 0;

fileContent.split("\n").forEach((line) => {
    if (!line) return;

    let red = 0;
    let green = 0;
    let blue = 0;
    line.match(/(\d+) green/g).forEach((val) => {
        green = +val.split(" ")[0] > green ? +val.split(" ")[0] : green;
    });
    line.match(/(\d+) blue/g).forEach((val) => {
        blue = +val.split(" ")[0] > blue ? +val.split(" ")[0] : blue;
    });
    line.match(/(\d+) red/g).forEach((val) => {
        red = +val.split(" ")[0] > red ? +val.split(" ")[0] : red;
    });

    result += red * blue * green;
});

console.log(`Part 2 answer is: ${result}`);
