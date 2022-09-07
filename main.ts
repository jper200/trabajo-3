input.onButtonPressed(Button.A, function () {
    basic.showNumber(n1)
    n1 += 1
})
input.onButtonPressed(Button.AB, function () {
    palabra1 = "bye"
})
input.onButtonPressed(Button.B, function () {
    n1 += -1
    basic.showNumber(n1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(palabra1)
})
let n1 = 0
let palabra1 = ""
palabra1 = "hola"
n1 = 15
