while True:
    print("Light Level " + input.light_level() + "Sound Level " + input.sound_level())
    if input.light_level() < 5 and input.sound_level() > 500:
        music.siren.play_until_done()
        light.set_all(color.rgb(255, 255, 255))
    else:
        light.clear()

