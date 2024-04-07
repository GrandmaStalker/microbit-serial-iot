enum RadioMessage {
    message1 = 49434
}
let EnviarMensajeRadio = ""
radio.setGroup(69)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
let WaitingVelocity = false
basic.forever(function () {
    EnviarMensajeRadio = serial.readString()
    if (EnviarMensajeRadio == "f") {
        radio.sendString("f")
        basic.showArrow(ArrowNames.North)
    } else if (EnviarMensajeRadio == "b") {
        radio.sendString("b")
        basic.showArrow(ArrowNames.South)
    } else if (EnviarMensajeRadio == "l") {
        radio.sendString("l")
        basic.showArrow(ArrowNames.West)
    } else if (EnviarMensajeRadio == "r") {
        radio.sendString("r")
        basic.showArrow(ArrowNames.East)
    } else if (EnviarMensajeRadio == "i") {
        radio.sendString("i")
        basic.showIcon(IconNames.Target)
    } else if (EnviarMensajeRadio == "s") {
        radio.sendString("s")
        basic.showIcon(IconNames.Square)
    } else if (EnviarMensajeRadio == "a") {
        radio.sendString("a")
        basic.showIcon(IconNames.Confused)
    } else if (EnviarMensajeRadio == "v") {
        WaitingVelocity = true
    }
    EnviarMensajeRadio = ""
})
