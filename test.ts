// tests go here; this will not be compiled when this package is used as an extension.

IO_Pin.SetIOpin(IOPin.P20, PinMode.PullUp)
basic.forever(function () {
    if (IO_Pin.ReadIOpin(IOPin.P20) == 0) {
        IO_Pin.WriteIOpin(IOPin.P1, 1)
    } else {
        IO_Pin.WriteIOpin(IOPin.P1, 0)
    }
})
