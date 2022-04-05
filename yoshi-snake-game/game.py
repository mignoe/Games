import time
import pygame
import keyboard_listener
import cordinate_system
from yoshi import Yoshi, colors
from functions import render_all

pygame.init()

# It should be 17x15. 
SCREEN_WIDTH = 680
SCREEN_HEIGHT = 600

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

yoshis = []
objects = []

player = Yoshi

running = True
while running:

    # Did the user click the window close button?
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill the background with green
    screen.fill((31, 134, 31))

    # Draw yoshi
     

    # Flip the display
    pygame.display.flip()
    
    time.sleep(0.5)

# Done! Time to quit.
pygame.quit()
