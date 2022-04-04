def move(object, direction):
    if direction == "up":
        object.y += 1 
    if direction == "right":
        object.x += 1
    if direction == "down":
        object.y -= 1
    if direction == "":
        object.x -= 1

def move_all_snake(snake):
    for i in range(len(snake) - 1):
        snake[i].x = snake[i + 1].x
        snake[i].y = snake[i + 1].y
       
    
