from game import SCREEN_WIDTH, SCREEN_HEIGHT


# The game works on a 17 x 15 cordinate system.

multiplierX = SCREEN_WIDTH / 17
def screen_x(num):
    return num * multiplierX


multiplierY = SCREEN_HEIGHT / 15
def screen_y(num):
    return num * multiplierY

# For tests.
if __name__ == "__main__":
    x = 2
    print(screen_x(x))
    x += 1
    print(screen_x(x))
