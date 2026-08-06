input.onButtonPressed(Button.A, function () {
    if (Wierd_dev_thing[SELECTED_ICON] == 42) {
        SELECTED_ICON = 0
    } else {
        SELECTED_ICON += 1
    }
})
function SHOWSELICON () {
    ICONS[SELECTED_ICON].showImage(0)
    basic.pause(200)
    basic.clearScreen()
}
let Wierd_dev_thing: number[] = []
let ICONS: Image[] = []
let SELECTED_ICON = 0
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
42
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
