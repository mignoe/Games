import asyncio 
from pynput import keyboard


import functions


async def key_listener():
    def on_press(key):
        if key == keyboard.Key.esc:
            return False  # stop listener
            k = key.name  # arrow keys direction    
        if k in ['up', 'right', 'down', 'left']: #keys of interest
            # self.keys.append(k)  # store it in global-like variable
            print('Key pressed: ' + k)
            

    listener = keyboard.Listener(on_press=on_press)
    listener.start()  # start to listen on a separate thread
    listener.join()  # remove if main thread is polling self.keys

if __name__ == "__main__":


