const { BrowserWindow } = require("electron");
const path = require("path");

function CreateWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 320,
    show: false,
    frame: false,
    resizable: false,
    fullscreen: false,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  win.loadFile("index.html");

  return win;
}

module.exports = CreateWindow();
