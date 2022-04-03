def move(character, direction):
    if direction == "up":
        character['y'] += 1
    elif direction == "right":
        character['x'] += 1
    elif direction == "down":
        character['y'] -= 1
    elif direction == "left":
        character['x'] -= 1
    return character

def create_new_dino(character, color):
    return {'width': character.width,
            'height': character.height,
            'x': character.x,
            'y': character.y,
            'img': f"images/{color}-yoshi/"}
