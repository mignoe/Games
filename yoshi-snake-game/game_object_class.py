import random


class Game_object:
    def __init__(self, last_frame, width = 40, height = 40, x = random.randint(0, 16) * 40, y = random.randint(0, 14) * 40,  current_frame = 0):
        self.frame_lim = last_frame
        self.frame = (current_frame - 1) % (last_frame + 1)
        
        self.width = width
        self.height = height
        self.x = x
        self.y = y
