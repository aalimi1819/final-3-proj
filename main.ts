input.onButtonPressed(Button.A, function () {
    meters_away += 1
    basic.showNumber(meters_away)
})
input.onButtonPressed(Button.AB, function () {
    eye_level += 0.05
    basic.showNumber(eye_level)
})
input.onButtonPressed(Button.B, function () {
    angle = input.rotation(Rotation.Pitch)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 G A G A B C5 - ", 195)
    basic.clearScreen()
    basic.showString("Angle:")
    basic.showNumber(angle)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    meters_away = angle * 0.01745329251
    hieght = meters_away * (Math.tan(angle) + eye_level)
    basic.showString("Height:")
    basic.showNumber(hieght)
})
let hieght = 0
let eye_level = 0
let meters_away = 0
let angle = 0
basic.showIcon(IconNames.Heart)
music.playMelody("G - - A - - B - ", 220)
basic.clearScreen()
basic.showString("x")
angle = 0
meters_away = 0
eye_level = 0
basic.clearScreen()
