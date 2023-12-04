const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");
const fileContent = fs.readFileSync(filePath, "utf8");

// part 1
result = 0;

const lines = fileContent.split("\n");

lines.forEach((line, i) => {
    if (!line) return;
    const parts = line.split(":")[1].split("|");
    const nums = parts[0].split(" ");
    let winning = [];
    nums.forEach((num) => {
        if (num) winning.push(+num);
    });
    const have = parts[1].split(" ");
    let many = 0;
    have.forEach((num) => {
        if (num && winning.includes(+num)) many++;
    });

    result += many == 0 ? 0 : Math.pow(2, many - 1);
});
console.log(`Part 1 answer is: ${result}`);

// part2
result = 0;

let count = new Map();

for (let i = 0; lines[i]; i++) {
    count.set(i, 1);
}

lines.forEach((line, i) => {
    if (!line) return;
    const parts = line.split(":")[1].split("|");
    const nums = parts[0].split(" ");
    let winning = [];
    nums.forEach((num) => {
        if (num) winning.push(+num);
    });
    const have = parts[1].split(" ");
    let many = 0;
    have.forEach((num) => {
        if (num && winning.includes(+num)) {
            count.set(i + many + 1, count.get(i + many + 1) + count.get(i));
            many++;
        }
    });
});

count.forEach((value) => {
    result += value;
});

console.log(`Part 2 answer is: ${result}`);
