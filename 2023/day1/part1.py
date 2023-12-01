def main():
	result = 0
	d1 = 0
	d2 = 0

	with open("input", 'r') as file:
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

	print(result)

if __name__ == '__main__':
	main()

