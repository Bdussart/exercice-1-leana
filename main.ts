input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(10)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (music.volume()))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setVolume(127)
})
