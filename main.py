while True:
    if input.light_level() < 5 and input.sound_level() > 540:
        music.siren.play_until_done()
        light.set_all(color.rgb(255, 0, 0))
        pause(30000)
    else:
        light.clear()
        