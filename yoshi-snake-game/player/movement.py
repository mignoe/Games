

def move(object, direction, multiplier_x, multiplier_y):
    if direction == "up":
        object.y -= 1 * multiplier_y
    if direction == "right":
        object.x += 1 * multiplier_x
    if direction == "down":
        object.y += 1 * multiplier_y
    if direction == "left":
        object.x -= 1 * multiplier_x


def move_all_snake(snake):
    for i in range(len(snake) - 1):
        snake[i].x = snake[i + 1].x
        snake[i].y = snake[i + 1].y
       


    