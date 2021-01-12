while (true) {
    console.log("Light Level = " + input.lightLevel())
    if (input.lightLevel() > 29) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() < 9) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(255, 125, 0))
        pause(3000)
        light.clear()
        pause(1000)
    }
    
}
