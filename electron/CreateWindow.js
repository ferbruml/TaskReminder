const { BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 250,
      height: 310,
      show: false,
      frame: false,
      resizable: false,
      fullscreen: false,
    })

    mainWindow.loadFile('index.html')
    //mainWindow.loadURL('https://www.google.com')

    mainWindow.on('blur', () => mainWindow.hide()) // ou poderia ser mainWindow.on('blur', mainWindow.hide)
  
    return mainWindow
}

//module.exports = createWindow // aqui passamos a função como referência
module.exports = createWindow() // aqui já estamos executando a função, então o módulo chamador já terá acesso ao retorno dela