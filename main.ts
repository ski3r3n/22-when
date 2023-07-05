input.onButtonPressed(Button.A, function () {
    onInput()
})
function onInput () {
    i += 1
    if (i == 10) {
        i = 0
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    onInput()
})
input.onGesture(Gesture.Shake, function () {
    onInput()
})
let i = 0
i = 0
basic.forever(function () {
    basic.showNumber(i)
})
