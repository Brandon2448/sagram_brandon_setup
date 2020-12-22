while True:
    print("Light Level = " + (input.light_level()))
    if input.light_level() > 5:
        light.set_all(light.rgb(0, 0, 0))
    elif 6 > input.light_level() > 1:
        light.set_all(light.rgb(0, 0, 255))
    else:
        light.set_all(light.rgb(255, 255, 0))