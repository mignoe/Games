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

   
    while True:  
        display.fill((255, 255, 255))
        display.blit(text, textRect)

        for event in pygame.event.get():
            if event.type == pygame.QUIT: 
                pygame.quit()
                break

        
        pygame.display.flip()