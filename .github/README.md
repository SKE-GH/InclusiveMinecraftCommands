# Bau-Helfer für Minecraft

A single-page web app (German UI) that builds Minecraft `/fill` commands and fun command-block recipes from taps.
No build step, no dependencies, no tracking. All fonts are included, so nothing is loaded from third parties.

## Put it online with GitHub Pages

1. Create a GitHub account and a **new public repository** (for example `bau-helfer`).
   Free accounts can only publish Pages from public repositories.
2. Click **Add file → Upload files**, drag in **everything from this folder**
   (`index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `fonts/`, `icons/`) and commit.
   Hidden files such as `.nojekyll` may not show in your file manager; the page works without it too.
3. Open **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then Save.
4. After a minute or two the address appears at the top of that page:
   `https://YOUR-NAME.github.io/bau-helfer/`

## On a phone or tablet

- **iPhone/iPad (Safari):** Share → *Add to Home Screen*
- **Android (Chrome):** menu → *Install app* or *Add to Home screen*

The page then opens like an app, and works offline after the first visit.

## Updating

Replace `index.html` in the repository. If the old version keeps showing up,
change `bau-helfer-v1` to `bau-helfer-v2` in `sw.js` so devices fetch the new files.

## Notes

- Saved commands, stars and settings are kept in the browser of each device (localStorage). They are not shared between devices.
- "Vorlesen" (read aloud) uses the browser's built-in German voice. Availability depends on the device.
- The address will be public to anyone who has the link. The page contains no personal data.
