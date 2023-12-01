def main():
	result = 0
	d1 = 0
	d2 = 0
	numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

	with open("input", 'r') as file:
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

	print(result)

if __name__ == '__main__':
	main()

