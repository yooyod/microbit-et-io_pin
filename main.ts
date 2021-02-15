IO_Pin.SetIOpin(IOPin.P19, PinMode.PullUp)
basic.forever(function () {
    if (IO_Pin.ReadIOpin(IOPin.P19) == 0) {
        IO_Pin.WriteIOpin(IOPin.P1, 1)
        basic.showIcon(IconNames.Heart)
    } else {
        IO_Pin.WriteIOpin(IOPin.P1, 0)
        basic.showIcon(IconNames.No)
    }
})
