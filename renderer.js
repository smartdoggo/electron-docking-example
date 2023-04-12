/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const electron = require("electron")
const ipc = electron.ipcRenderer

document.addEventListener("mouseover", () => {
	//createBrowserWindow();
	console.log("ENTER")
	ipc.send("mouseover", "myred")
})
document.addEventListener("mouseout", () => {
	//createBrowserWindow();
	console.log("EXIT")
	ipc.send("mouseout", "myred")
})
