while (true) {
    console.log("Light Level = " + input.lightLevel())
    if (input.lightLevel() > 20) {
        music.pewPew.play()
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
