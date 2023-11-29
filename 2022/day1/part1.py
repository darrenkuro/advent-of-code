def main():
	highest = 0
	current = 0

	with open("input.txt", 'r') as file:
		for line in file:
			if line == '\n':
				if current > highest:
					highest = current
				current = 0
			else:
				current += int(line.strip())

	print(highest)

if __name__ == '__main__':
	main()

