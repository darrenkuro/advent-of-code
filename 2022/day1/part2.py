def main():
	elves = []
	current = 0

	with open("input.txt", 'r') as file:
		for line in file:
			if line == '\n':
				elves.append(current)
				current = 0
			else:
				current += int(line.strip())

	elves = sorted(elves, reverse=True)
	print(elves[0] + elves[1] + elves[2])

if __name__ == '__main__':
	main()

