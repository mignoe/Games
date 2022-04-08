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




if __name__ == "__main__":
    import time
    from yoshi import Yoshi

    SCREEN_WIDTH = 680
    SCREEN_HEIGHT = 600
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

    yoshis = []
    yoshi1 = Yoshi()
    yoshis.append(yoshi1)
    yoshi2 = Yoshi(x = 40, y = 40)
    yoshis.append(yoshi2)
    yoshi3 = Yoshi(x = 70, y = 40)
    yoshis.append(yoshi3)

    running = True
    while running:
    
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        
        screen.fill((31, 134, 31))

        render_all(yoshis)

        

        pygame.display.flip()
        
        time.sleep(0.5)

    pygame.quit()


