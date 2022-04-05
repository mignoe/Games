
# Renders all objects on the game.
def render_all(objects):
    for object in objects:
        src = object.src
        width, height = object.width, object.height        
        x = object.x
        y = object.y

        image = pygame.image.load(src)
        image = pygame.transform.scale(image, (width, height))
        screen.blit(image, (x, y))

