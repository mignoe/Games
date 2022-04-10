import pygame
import sys
relevant_events = {
    
}

def event_listener():
    for event in pygame.event.get():
        # Event if the game should quit.
        if event.type == pygame.QUIT:
            return "quit"
            

        # Checking if keydown event happened or not
        if event.type == pygame.KEYDOWN:

            # Checking if key "Arrow_Up" was pressed
            if event.key == pygame.K_UP:
                return "up"
               
            # Checking if key "Arrow_Right" was pressed
            if event.key == pygame.K_RIGHT:
                return "right"
            
            # Checking if key "Arrow_Down" was pressed
            if event.key == pygame.K_DOWN:
                return "down"
             
            # Checking if key "Arrow_Left" was pressed
            if event.key == pygame.K_LEFT:
                return "left"


