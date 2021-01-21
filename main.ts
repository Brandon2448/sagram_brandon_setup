while (true) {
    console.log("Light Level " + input.lightLevel() + "Sound Level " + input.soundLevel())
    if (input.lightLevel() < 10 && input.soundLevel() > 150) {
        music.siren.playUntilDone()
        light.setAll(color.rgb(255, 0, 0))
        pause(3000)
    } else {
        light.clear()
    }
    
}
