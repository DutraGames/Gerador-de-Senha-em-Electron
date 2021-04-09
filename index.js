const { app, BrowserWindow, Menu, dialog} = require('electron')
const { write, writeFile } = require('fs')
const path = require('path')


function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: false,
    movable: true,
    icon: __dirname + "/cadeado.png",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})