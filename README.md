# Extention ET-IO PIN

> Open this page at [https://yooyod.github.io/microbit-et-io_pin/](https://yooyod.github.io/microbit-et-io_pin/)


## Usage

### ET-IO Pin

```blocks
IO_Pin.SetIOpin(IOPin.P20, PinMode.PullUp)
basic.forever(function () {
    if (IO_Pin.ReadIOpin(IOPin.P20) == 0) {
        IO_Pin.WriteIOpin(IOPin.P1, 1)
    } else {
        IO_Pin.WriteIOpin(IOPin.P1, 0)
    }
})


})
```

## Example

 Demo Set P19=Input pullUp . If P19=0 write P1=1 and display show Heart . 
                             If P19=1 write P1=0 and display show No.

``` blocks 
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

})
```


## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/yooyod/microbit-et-io_pin** and import

## Edit this project ![Build status badge](https://github.com/yooyod/microbit-et-io_pin/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/yooyod/microbit-et-io_pin** and click import


#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
