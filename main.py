def on_gesture_shake():
    global i
    i += 1
    if i == 10:
        i = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

i = 0
i = 0

def on_forever():
    basic.show_number(i)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
