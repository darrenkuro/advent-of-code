result = 0

with open('input', 'r') as file:
    for line in file:
        length = int((len(line) - 1) / 2)
        string1 = line[:length]
        string2 = line[length:]
        for char in string1:
            if char in string2:
                if char.islower():
                    result += ord(char) - ord('a') + 1
                else:
                    result += ord(char) - ord('A') + 27
                break

print(result)
