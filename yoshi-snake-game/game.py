import pygame, sys, time, random

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
pygame.display.set_caption("Yoshi Snake Game.")

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
direction = ""

score = 1
frame = 0
while True:
    # Rendering frame
        # Reseting screen for every frame.
    screen.fill(GREEN)

        # Rendering all objects
    render_all( one_dimensional_list(objects), screen )

        # Flip the display
    pygame.display.flip()    

        # Verifying if player lost:
    if collided_walls(player, SCREEN_WIDTH, SCREEN_HEIGHT):
       end_game(screen)
        
       
    time.sleep(0.5)

    # Taking input.
    last_relevant_event = event_listener()
    # Closing game if clicked to quit:
    if last_relevant_event == "quit":
        sys.exit(0)

        # Checking egg collision.
    
    # Preparing for the next rendering:
    move_all(yoshis)

    
        # Moving player to chosen direction.
    direction = set_direction(direction, last_relevant_event)   
    move(player, direction, 40, 40)

    if eggy.check_collision(player):
        new_yoshi = Yoshi(x = player.x, y = player.y)
        yoshis.append(new_yoshi)
        eggy.x = random.randint(0, 17) * 40
        eggy.y = random.randint(0, 15) * 40
        score += 1
        pygame.display.set_caption("Yoshi's Snake Game." + " " * 3 + "Score: " + str(score))

        # Updating gif frames.
    update_frames(one_dimensional_list(objects))


