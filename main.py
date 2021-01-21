while True:
    print("Light Level " + input.light_level() + "Sound Level " + input.sound_level())
    if input.light_level() < 10 and input.sound_level() > 150:
        music.siren.play_until_done()
        light.set_all(color.rgb(255, 0, 0))
        pause(3000)
    else:
        light.clear()

