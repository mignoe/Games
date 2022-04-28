import random

from game_object_class import Game_object

colors = {
        "green": "./images/green-yoshi/frame_", 
    }


class Yoshi(Game_object):  
    
    random_x = random.randint(0, 16) * 40
    random_y = random.randint(0, 14) * 40
    random_color = random.choice( list( colors.keys() ) )


    def __init__(self, color = random_color, current_frame = 0, x = random_x, y = random_y, width = 40, height = 40, last_frame = 7):
        super().__init__(last_frame, width, height, x, y,  current_frame)
        self.color = color
        self.src = colors[color] + str(self.frame) + ".gif"
            

    def update_frame(self):
        self.frame += 1
        
        # Yoshis only have 7 frames.
        if self.frame > self.frame_lim:
            self.frame = 0
        
        self.src = colors[self.color] + str(self.frame) + ".gif"
