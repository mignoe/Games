import pygame

relevant_events = {
    # For leaving the game.
    pygame.QUIT: "quit",
    
    # KeyDown important events.
    pygame.K_UP: "up",
    pygame.K_RIGHT: "right",
    pygame.K_DOWN: "down",
    pygame.K_LEFT: "left"

}


def event_listener() -> str:
    for event in pygame.event.get():
        # Normal events type.
        if event.type in relevant_events.keys():
            return relevant_events[event.type]

        # Keydown events type.
        if event.type == pygame.KEYDOWN and event.key in relevant_events.keys():
            return relevant_events[event.key]
            

