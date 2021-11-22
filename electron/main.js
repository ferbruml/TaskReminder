const { app } = require('electron')
const ControlWindow = require('./ControlWindow.js')

function App() {
  const win = require('./createWindow.js')
  const tray = require('./tray.js')
  
  const { toggle } = ControlWindow(win, tray)

  tray.on('click', toggle)
}

app.whenReady().then(() => {
  App()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})