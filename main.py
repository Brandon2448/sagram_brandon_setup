while True:
    print("Light Level = " + (input.light_level()))
    if input.light_level() > 30:
        music.pew_pew.play_until_done()
    else:
        light.clear()
        