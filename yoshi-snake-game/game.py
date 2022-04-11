import pygame, sys, time

from event_listener import event_listener
from functions import render_all, one_dimensional_list, update_frames

sys.path.insert(1, 'player')
from yoshi import Yoshi
from movement import move_all, set_direction, move

sys.path.insert(1, 'eggs')
from egg import Egg

sys.path.insert(1, 'end_game')
from end_game import  end_game
from death_collided import collided_walls



pygame.init()

# Setting app name.
score = 1
pygame.display.set_caption("Yoshi's Snake Game." + " " * 3 + "Score: " + str(score))

# It should be 17x15. 
SCREEN_WIDTH = 680
SCREEN_HEIGHT = 600
GREEN = (31, 134, 31)
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))




yoshis = []
eggs = []

objects = []
objects.append(yoshis)
objects.append(eggs)

# Creating player character.
player = Yoshi(x = 120, y = 0)
yoshis.append(player)


# Testing egg.
eggy = Egg("green")
eggs.append(eggy)

# Allows player to choose first direction.
direction = "right"

running = True
while running:
    
    screen.fill(GREEN)

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
        running = False

        # Updating gif frames.
    update_frames(one_dimensional_list(objects))

    shadow_yoshi = yoshis[-1]    
    move_all(yoshis)

        # Moving player to chosen direction.
    direction = set_direction(direction, last_relevant_event)   
    move(player, direction, 40, 40)

        # Checking eggy collision
    if eggy.check_collision(player):
        new_yoshi = Yoshi(x = shadow_yoshi.x, y = shadow_yoshi.y)
        yoshis.append(new_yoshi)


    
pygame.quit()
