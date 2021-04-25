const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "clock.svg");

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip("Reminder");

  return tray;
}

module.exports = createTray();
