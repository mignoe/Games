# The game works on a 17 x 15 cordinate system


def screen_x(num, multiplier):
    return num * multiplier


def screen_y(num, multiplier):
    return num * multiplier


# For tests.

if __name__ == "__main__":
    x = 2
    print(screen_x(x, 40))
    x += 1
    print(screen_x(x, 40))
