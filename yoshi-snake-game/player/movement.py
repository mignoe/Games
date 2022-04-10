

def set_direction(actual_direction, relevant_event):
    
    # Changes direction, unless the direction wanted
    # is the reverse of the actual direction

    if relevant_event == "up" and actual_direction != "down":
        return "up"

    if relevant_event == "right" and actual_direction != "left":
        return "right"

    if relevant_event == "down" and actual_direction != "up":
        return "down"

    if relevant_event == "left" and actual_direction != "right":
        return "left"


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
       


    