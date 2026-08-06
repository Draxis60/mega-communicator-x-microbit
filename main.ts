radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
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
images.iconImage(IconNames.Meh)
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
42
]
basic.forever(function () {
	
})
