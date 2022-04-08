def collided_walls(player, screen_width, screen_height):
    if  0 > player.x or player.x > screen_width - player.width:
        return True
        
    if 0 > player.y or player.y > screen_height - player.height:
        return True