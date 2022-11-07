let sprite = 0
let timer = 0
input.onButtonPressed(Button.A, function () {
    sprite = 1
    timer = 15
    basic.showString("go!")
    basic.pause(1500)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 0, 220, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    if (timer == 15) {
        for (let index = 0; index < 15; index++) {
            timer += -1
            basic.pause(1000)
            basic.showNumber(timer)
            music.playTone(587, music.beat(BeatFraction.Whole))
        }
    }
    if (timer == 0) {
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B C5 B A B A G ", 120)
        music.playMelody("D E D E F E F - ", -120)
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    while (sprite == 0) {
        timer = 15
        basic.showArrow(ArrowNames.West)
        basic.showString(" A to start")
    }
})
