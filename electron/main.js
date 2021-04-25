const { app } = require("electron");

function App() {
  const win = require("./CreateWindow.js");
  const tray = require("./Tray.js");
}

app.whenReady().then(App);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
