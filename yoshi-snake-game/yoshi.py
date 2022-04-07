colors = {
        "green": "./images/green-yoshi/frame_", 
    }


class Yoshi:  

    def __init__(self, color = "green", frame = 0, x = 1, y = 1, width = 40, height = 40):
        self.color = color
        self.frame = frame
        self.src = colors[color] + str(frame)
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    

    def update_frame(self):
        self.frame = frame + 1
        lim = 7
        
        # Yoshis only have 7 frames.
        if self.frame > 7:
            self.frame = 0
        
        self.src = self.color + str(self.frame)
def create_player(color):
    yoshi = Yoshi(color)

    return yoshi
