const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../assets/hourglass.png");

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip;

  return tray;
}

module.exports = createTray();
