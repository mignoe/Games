import random

colors = {
    "green": "./images/eggs/egg_"
}

class Egg:

    def __init__(self, color, x = random.randint(0, 17) * 40, y = random.randint(0, 15) * 40, width = 40, height = 40, frame = 0, limite = 3):
        self.x = x
        self.y = y

        self.color = color
        self.src = colors[self.color] + str(frame) + ".png"
        self.width = width
        self.height = height
        self.frame = frame
        self.frame_lim = limite

 
    def update_frame(self):
        self.frame += 1
        
        # eggs only have 3 frames.
        if self.frame > self.frame_lim:
            self.frame = 0