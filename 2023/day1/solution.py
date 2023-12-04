def part1():
	result = 0
	d1 = 0
	d2 = 0

	with open("input.txt", 'r') as file:
		for line in file:
			for c in line:
				if c.isdigit():
					d1 = int(c)
					break
			for c in reversed(line):
				if c.isdigit():
					d2 = int(c)
					break
			result += d1 * 10 + d2

	print(f"Part 1 answer is: {result}")

def part2():
	result = 0
	d1 = 0
	d2 = 0
	numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

	with open("input.txt", 'r') as file:
		for line in file:
			d1 = 0
			for i, char in enumerate(line):
				if d1 == 0 and char.isdigit():
					d1 = int(char)
				for index, number in enumerate(numbers):
					if d1 == 0 and line[i:].find(number) == 0:
						d1 = index + 1
			d2 = 0
			line = ''.join(reversed(line))
			for i, char in enumerate(line):
				if d2 == 0 and char.isdigit():
					d2 = int(char)
				for index, number in enumerate(numbers):
					if d2 == 0 and line[i:].find(number[::-1]) == 0:
						d2 = index + 1
			result += d1 * 10 + d2

	print(f"Part 2 answer is: {result}")


if __name__ == '__main__':
	part1()
	part2()
