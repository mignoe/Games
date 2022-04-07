colors = {
        "green": "./images/green-yoshi/frame_", 
    }


class Yoshi:  

    def __init__(self, color = "green", frame = 0, x = 0, y = 0, width = 40, height = 40, limite = 7):
        self.color = color
        self.frame = frame
        self.frame_lim = limite
        self.src = colors[color] + str(frame) + ".gif"
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    

    def update_frame(self):
        self.frame += 1
        
        # Yoshis only have 7 frames.
        if self.frame > 7:
            self.frame = 0
        
        self.src = colors[self.color] + str(self.frame) + ".gif"
