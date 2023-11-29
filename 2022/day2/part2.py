def main():
    score = 0

    with open('input.txt', 'r') as file:
        for line in file:
            [oppo, result] = line.split()
            if result == 'Y':
                score += 3
            elif result == 'Z':
                score += 6
            if result == 'X':
                if oppo == 'A':
                    score += 3
                elif oppo == 'B':
                    score += 1
                else:
                    score += 2
            elif result == 'Y':
                if oppo == 'A':
                    score += 1
                elif oppo == 'B':
                    score += 2
                else:
                    score += 3
            elif result == 'Z':
                if oppo == 'A':
                    score += 2
                elif oppo == 'B':
                    score += 3
                else:
                    score += 1
    print(score)


if __name__ == '__main__':
    main()
