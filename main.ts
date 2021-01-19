while (true) {
    console.log("Light Level = " + input.lightLevel())
    if (input.lightLevel() > 30) {
        music.pewPew.playUntilDone()
    } else {
        light.clear()
    }
    
}
