while (true) {
    console.log("Light Level = " + input.lightLevel())
    if (input.lightLevel() > 5) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (6 > input.lightLevel() && input.lightLevel() > 1) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
