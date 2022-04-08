import time
import pygame
from keyboard_listener import key_listener
from yoshi import Yoshi, colors
from functions import render_all, one_dimensional_list, update_frames
from end_game import  end_game
from collided import collided_walls
from movement import move

pygame.init()

# Setting app name.
pygame.display.set_caption("Yoshi's snake game")

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


running = True
while running:
    # Did the user click the window close button?
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill the background with green
    screen.fill((31, 134, 31))

    # Rendering all objects
    render_all(one_dimensional_list(objects), screen)

    # Flip the display
    pygame.display.flip()
    
    # Updating the stats for next rendering:
        # Updating gif frames.
    update_frames(one_dimensional_list(objects))
        # Moving yoshis
    

    # Verifying if player lost:
    if collided_walls(player, SCREEN_WIDTH, SCREEN_HEIGHT):
        end_game(screen)
        running = False
        
    time.sleep(0.5)
    direction = key_listener() or direction 
    move(player, direction, 40, 40)

    
# Done! Time to quit.
pygame.quit()
