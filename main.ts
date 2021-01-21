while (true) {
    console.log("Light Level " + input.lightLevel() + "Sound Level " + input.soundLevel())
    if (input.lightLevel() < 5 && input.soundLevel() > 500) {
        music.siren.playUntilDone()
        light.setAll(color.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
