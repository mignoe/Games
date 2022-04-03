colors = ['green']

class yoshi:
    def __init__(self, color, frame):
        self.width = 90
        self.height = 60
        self.x = 0
        self.y = 0
        self.frame = frame
        self.img = f"images/{color}-yoshi/frame_{self.frame}.gif"

def update_frame(frame):
    frame += 1
    if frame == 7:
        frame = 0
    return frame       
        
