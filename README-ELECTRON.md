# Desktop app (Electron)

Run the local game hub as a desktop application.

Prerequisites
- Node.js and npm installed: https://nodejs.org/

Quick start
1. Install dev dependencies:

```bash
npm install
```

2. Start the Electron app:

```bash
npm run start
```

Packaging
- Install `electron-packager` if you want to build distributables:

```bash
npm install --save-dev electron-packager
npm run package:linux
```

Notes
- The app loads `gamehub-local.html` from the project root so it runs entirely locally.
