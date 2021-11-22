const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'app.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('Task Reminder')

    return tray
}

module.exports = createTray()