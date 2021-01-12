while True:
    print("Light Level = " + (input.light_level()))
    if input.light_level() > 29:
        light.set_all(light.rgb(255, 255, 255))
    elif input.light_level() < 9:
        light.set_all(light.rgb(0, 0, 0))
    else:
        light.set_all(light.rgb(255, 125, 0))
        pause(3000)
        light.clear()
        pause(1000)