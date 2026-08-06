enum RadioMessage {
    message1 = 49434,
    READ = 62632
}
radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pauseUntil(() => input.logoIsPressed())
    radio.sendMessage(RadioMessage.READ)
    ICONS[receivedNumber].showImage(0)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (Wierd_dev_thing[SELECTED_ICON] == 42) {
        SELECTED_ICON = 0
        SHOWSELICON()
    } else {
        SELECTED_ICON += 1
        SHOWSELICON()
    }
})
function SHOWSELICON () {
    ICONS[SELECTED_ICON].showImage(0)
    basic.pause(200)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(SELECTED_ICON)
})
radio.onReceivedMessage(RadioMessage.READ, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 400, 192, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let Wierd_dev_thing: number[] = []
let ICONS: Image[] = []
let SELECTED_ICON = 0
radio.setTransmitPower(7)
radio.setGroup(154)
SELECTED_ICON = 0
ICONS = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Sad),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.No),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Meh),
images.createImage(`
    . . # . .
    . # . # .
    . . . # .
    . . # . .
    . . # . .
    `)
]
Wierd_dev_thing = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
42
]
basic.forever(function () {
	
})
