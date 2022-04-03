import time
import pygame
pygame.init()

import character
import keyboard_listener
import cordinate_system
from functions import *



# It should be 17x15. 
SCREEN_WIDTH = 680
SCREEN_HEIGHT = 600

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

running = True
while running:

    # Did the user click the window close button?
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    # Fill the background with green
    screen.fill((31, 134, 31))

    # Draw a solid blue circle in the center
    pygame.draw.circle(screen, (0, 0, 255), (250, 250), 75)

    # Flip the display
    pygame.display.flip()

# Done! Time to quit.
pygame.quit()

# -----------Using Arcade yet-----------
'''
#making custom cordinates system
#consider possible x values e [0, 17] and e = [0, 15]
def x(num):
    return (num * 40) + yoshi.width/2 
def y(num):
    return (num * 40) + yoshi.height/2  

frame = 0
yoshi = character.yoshi('green', frame)
dinos = []
dinos.append(create_new_dino(yoshi, 'green') )

def render_game():
    arcade.start_render()
    #character
    #Display dinos
    for i in dinos:
        src = i['img'] + f"frame_{frame}.gif"
        image = arcade.load_texture(src, 0 , 0, 500, 351)
        arcade.draw_texture_rectangle(x(i['x']), y(i['y']), i['width'], i['height'], image)

    # Finish drawing and display the result
    arcade.finish_render()

def run_game():
    global frame
    while True:
        render_game()
        time.sleep(0.09)
        #prepare for the next yoshi frame
        frame = character.update_frame(frame)

async def main():
   task = keyboard_listener.asyncio.create_task(keyboard_listener.key_listener())
   run_game()

keyboard_listener.asyncio.run(main())


'''
