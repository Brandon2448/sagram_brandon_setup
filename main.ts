while (true) {
    if (input.lightLevel() < 5 && input.soundLevel() > 540) {
        music.siren.playUntilDone()
        light.setAll(color.rgb(255, 0, 0))
        pause(30000)
    } else {
        light.clear()
    }
    
}
