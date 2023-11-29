def main():
    score = 0

    with open('input.txt', 'r') as file:
        for line in file:
            [oppo, self] = line.split()
            score += ord(self) - ord('W')  # ascii value
            if oppo == 'A':
                if self == 'Y':
                    score += 6
                elif self == 'X':
                    score += 3
            elif oppo == 'B':
                if self == 'Z':
                    score += 6
                elif self == 'Y':
                    score += 3
            elif oppo == 'C':
                if self == 'X':
                    score += 6
                elif self == 'Z':
                    score += 3
    print(score)


if __name__ == '__main__':
    main()
