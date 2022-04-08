import pygame

def key_listener():
    for event in pygame.event.get():
         
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


