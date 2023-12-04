fn main() {
    let file_content = include_str!("input.txt");

    // Part 1
    let result_p1 = file_content.lines().fold(0, |acc, line| {
        let first = line.chars().find_map(|c| c.to_digit(10)).unwrap_or(0);
        let last = line.chars().rev().find_map(|c| c.to_digit(10)).unwrap_or(0);
        acc + first * 10 + last
    });

    println!("Part 1 answer is: {result_p1}");

    // Part 2
    let numbers = vec![
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4",
        "5", "6", "7", "8", "9",
    ];

    let find_number = |slice: &str| {
        numbers.iter().enumerate().find_map(|(index, number)| {
            if slice.starts_with(number) {
                Some((index as u32 % 9) + 1)
            } else {
                None
            }
        })
    };

    let result_p2 = file_content.lines().fold(0, |acc, line| {
        let first = line
            .char_indices()
            .find_map(|(i, _)| find_number(&line[i..]))
            .unwrap_or(0);
        let last = line
            .char_indices()
            .rev()
            .find_map(|(i, _)| find_number(&line[i..]))
            .unwrap_or(0);
        acc + first * 10 + last
    });

    println!("Part 1 answer is: {result_p2}");
}
