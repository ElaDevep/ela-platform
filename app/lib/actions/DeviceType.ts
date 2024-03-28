'use strict'

const DeviceType = () => {
    let deviceType:string
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        deviceType="mobile"
    } else {
        deviceType="computer"
    }
    return deviceType
}

export default DeviceType

