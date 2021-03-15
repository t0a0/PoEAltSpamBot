import { app, BrowserWindow } from 'electron'
var ks = require('node-key-sender');

app.on('search', (event, arg) => {
    console.log(arg);
});

const fs = require('fs')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.webContents.openDevTools()
  win.loadFile('index.html')



  // document.getElementById('search_button').addEventListener('click', function(e) {
  //   e.preventDefault()
  //
  // })

  // let baseItem = getBaseItemWithName("Astral Plate")
  // // console.log(baseItem)
  // let mods = getModPoolForBaseItem(baseItem)
  // // console.log(modGroups)
  // // console.log(modGroups.length)
  // for (mod of mods) {
  //   for (stat of mod.stats) {
  //     // console.log(stat)
  //     let translation = getStatTranslation(stat)
  //     console.log(translation)
  //   }
  // }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
