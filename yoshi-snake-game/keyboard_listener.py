import pygame

def key_listener():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
         
        # checking if keydown event happened or not
        if event.type == pygame.KEYDOWN:

            # checking if key "A" was pressed
            if event.key == pygame.K_UP:
                return "up"
               
            # checking if key "J" was pressed
            if event.key == pygame.K_RIGHT:
                return "right"
            
            # checking if key "P" was pressed
            if event.key == pygame.K_DOWN:
                return "down"
             
            # checking if key "M" was pressed
            if event.key == pygame.K_LEFT:
                return "left"

# For testing.

if __name__ == "__main__":
    
    import pygame
    import sys

    pygame.init()
    display = pygame.display.set_mode((300, 300))
    while True:
        key_listener()

