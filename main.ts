// Down
input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
    basic.pause(1000)
    servos.P0.stop()
})
// Up
input.onButtonPressed(Button.B, function () {
    servos.P0.run(-100)
    basic.pause(1000)
    servos.P0.stop()
})
