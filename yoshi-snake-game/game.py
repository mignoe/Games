import time
import pygame
import keyboard_listener
import cordinate_system
from yoshi import Yoshi, colors
from functions import render_all, one_dimensional_list, update_frames, verify_collision_screen
from movement import move

pygame.init()

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
    move(player, "down", 40, 40)

    # Verifying if player lost:
    print(player.y)
    verify_collision_screen(player, SCREEN_WIDTH, SCREEN_HEIGHT)
        
    time.sleep(0.5)

# Done! Time to quit.
pygame.quit()
