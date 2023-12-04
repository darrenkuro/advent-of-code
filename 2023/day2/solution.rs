fn main() {
    let file_content = include_str!("input.txt");

    let result_p1 = file_content.lines().fold(0, |acc, line| {
        let mut possible = true;
        let parts: Vec<&str> = line.split(':').collect();

        let id: u32 = parts[0]
            .split_whitespace()
            .nth(1)
            .unwrap_or("")
            .parse()
            .unwrap_or(0);

        for game in parts[1].split(';') {
            for i in game.split(',') {
                let mut iter = i.split_whitespace();
                let count = iter.next().unwrap().parse::<u32>().unwrap();
                let color = iter.next().unwrap();

                match color {
                    "red" if count > 12 => possible = false,
                    "green" if count > 13 => possible = false,
                    "blue" if count > 14 => possible = false,
                    _ => (),
                }
            }
        }

        acc + if possible { id } else { 0 }
    });

    println!("Part 1 answer is {result_p1}");

    let result_p2 = file_content.lines().fold(0, |acc, line| {
        let (mut r, mut g, mut b) = (0, 0, 0);
        let parts: Vec<&str> = line.split(':').collect();

        let id: u32 = parts[0]
            .split_whitespace()
            .nth(1)
            .unwrap_or("")
            .parse()
            .unwrap_or(0);

        for game in parts[1].split(';') {
            for i in game.split(',') {
                let mut iter = i.split_whitespace();
                let count = iter.next().unwrap().parse::<u32>().unwrap();
                let color = iter.next().unwrap();

                match color {
                    "red" if count > r => r = count,
                    "green" if count > g => g = count,
                    "blue" if count > b => b = count,
                    _ => (),
                }
            }
        }

        acc + r * g * b
    });

    println!("Part 2 answer is {result_p2}");
}
