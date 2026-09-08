# Documentation

## Theme flow

1. The header reads a saved theme from local storage.
2. If there is no saved value, the browser's system preference is used.
3. The selected theme is stored on the root document as `data-theme`.
4. CSS variables in `src/index.css` change the surface, text, border, accent, and shadow values.
5. The selected value is saved under the app-specific key `basic-themed-app-theme`.

The theme button is a real keyboard-accessible button with an accessible label and pressed state.

## Application structure

- `src/main.jsx` mounts the React app.
- `src/App.jsx` renders the content and shared shell.
- `src/App.styled.js` contains page-level styled-components.
- `src/components/header` contains theme selection.
- `src/components/footer` contains the footer.
- `src/index.css` contains global tokens, reset rules, and accessibility styles.

## GitHub Pages support

Vite uses `base: "/basic-themed-app/"` in `vite.config.js`. The predeploy script builds the app and copies `dist/index.html` to `dist/404.html` for static-host refresh fallback.

## Commands

Install dependencies:

```powershell
npm install
```

Start the Vite server:

```powershell
npm run dev
```

Run lint:

```powershell
npm run lint
```

Build and preview:

```powershell
npm run build
npm run preview
```

Deploy:

```powershell
npm run deploy
```

## Design decisions

- The project remains Vite based.
- Styled-components is the only component styling library.
- Theme state is persisted without requiring a backend.
- The UI uses system fonts and does not depend on an external font request.
- No test folder or test script is included.
