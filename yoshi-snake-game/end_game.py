import pygame

# End game.

def end_game(display):
    pygame.init()

    green = (0, 255, 0)
    blue = (0, 0, 128)
    font = pygame.font.Font('freesansbold.ttf', 32)
    text = font.render('You lost!', True, green, blue)
    textRect = text.get_rect()
    textRect.center = (680 // 2, 600 // 2)

    running = True
    while running:  
        display.fill((255, 255, 255))
        display.blit(text, textRect)

        for event in pygame.event.get():
            if event.type == pygame.QUIT: 
                running = False
        
        pygame.display.flip()




if __name__ == "__main__":
    SCREEN_WIDTH = 680
    SCREEN_HEIGHT = 600
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    end_game(screen)