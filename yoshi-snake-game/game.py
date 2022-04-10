import sys
sys.path.insert(1, 'player')
sys.path.insert(1, 'end_game')

import time
import pygame
from event_listener import event_listener
from yoshi import Yoshi, colors
from functions import render_all, one_dimensional_list, update_frames
from end_game import  end_game
from collided import collided_walls
from movement import set_direction, move

pygame.init()

# Setting app name.
score = 1
pygame.display.set_caption("Yoshi's snake game." + " " * 3 + "score: " + str(score))

# It should be 17x15. 
SCREEN_WIDTH = 680
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))


yoshis = []

objects = []
objects.append(yoshis)

# Creating player character.
player = Yoshi()
yoshis.append(player)

# Letting player choose the first direction.
direction = ""

running = True
while running:
    
    # Fill the background with green
    screen.fill((31, 134, 31))

    # Rendering all objects
    render_all(one_dimensional_list(objects), screen)

    # Flip the display
    pygame.display.flip()    
    

    # Verifying if player lost:
    if collided_walls(player, SCREEN_WIDTH, SCREEN_HEIGHT):
       end_game(screen)

        
        
    time.sleep(0.5)

    # Preparing for the next rendering:
        # Taking input.
    last_relevant_event = event_listener()
        # Closing game if clicked to quit:
    if last_relevant_event == "quit":
        sys.exit(0)

        # Updating gif frames.
    update_frames(one_dimensional_list(objects))
        
        # Moving player to chosen direction.
    direction = set_direction(direction, last_relevant_event)   
    move(player, direction, 40, 40)

    
# Done! Time to quit.
pygame.display.quit()
pygame.quit()
