while True:
    print("Light Level = " + (input.light_level()))
    if input.light_level() > 10:
        music.pew_pew.play()
    else:
        light.set_all(light.rgb(255, 255, 255))
        