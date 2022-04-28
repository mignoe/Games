import random

from game_object_class import Game_object

colors = {
    "green": "./images/eggs/egg_"
}

class Egg(Game_object):

    def __init__(self, color, width = 40, height = 40,  last_frame = 3, x = random.randint(0, 16) * 40, y = random.randint(0, 14) * 40,   current_frame = 0):
        super().__init__(last_frame, width, height, x, y,  current_frame)
        self.color = color
        self.src = colors[self.color] + str(self.frame) + ".png"
        
    
    def update_frame(self):
        self.frame += 1
        
        # eggs only have 3 frames.
        if self.frame > self.frame_lim:
            self.frame = 0
        
        self.src = colors[self.color] + str(self.frame) + ".png"
    

    def check_collision(self, player):
        if player.x == self.x and player.y == self.y:
            return True


if __name__ == "__main__":
    eggy = Egg("green")