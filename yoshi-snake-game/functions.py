import pygame

# Renders all objects on the game.
def render_all(objects, display):
    for object in objects:
        src = object.src
        width, height = object.width, object.height        
        x = object.x
        y = object.y

        image = pygame.image.load(src)
        image = pygame.transform.scale(image, (width, height))
        display.blit(image, (x, y))


def one_dimensional_list(nested_list):

    # Can only be used on a completly two dimensional list.
    one_dimensional_list = []
    for i in range(len(nested_list)):
        for j in range(len(nested_list[i])):
            one_dimensional_list.append(nested_list[i][j])

    return one_dimensional_list


def update_frames(objects):
    for object in objects:
        object.update_frame()



