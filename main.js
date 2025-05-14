const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const phpServer = require('node-php-server');

const HOST = '127.0.0.1';
const PORT = 8000;
const SERVER_URL = `http://${HOST}:${PORT}`;

let mainWindow;

function createWindow() {
  // Inicia o servidor PHP apontando para a pasta public do Laravel
  phpServer.createServer({
    port: PORT,
    hostname: HOST,
    base: path.join(__dirname, '../public'),
    keepalive: false,
    open: false,
    bin: path.join(__dirname, 'php', process.platform === 'win32' ? 'php.exe' : 'php'),
    router: path.join(__dirname, 'server.php'),
  });

  // Cria a janela do Electron
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width,
    height,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
    },
  });

  // Carrega o Laravel via Inertia/Vite
  mainWindow.loadURL(SERVER_URL); 

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.show();
    mainWindow.maximize();
  });

  mainWindow.on('closed', () => {
    phpServer.close();
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    phpServer.close();
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
