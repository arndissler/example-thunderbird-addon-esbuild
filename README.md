# Example Thunderbird Extension w/ esbuild

This example shows how to wire up a Thunderbird extension written in [TypeScript](https://www.typescriptlang.org/), with [React](https://react.dev/) as FrontEnd framework and bundled with [esbuild](https://esbuild.github.io/).

The extension creates an action button in Thunderbird that opens a small popup after button click.

## How does it work?

In the folder `src` are all files that form the extension:

- `manifest.json` holds the manifest v3 of the extension.
- `background.ts` contains the background module that - normally - handles the processing of the extension. In this example, the background script is empty.
- the folder `popup` contains all files that displays the popup contents:
  - `index.ts` is the main entry point for the popup.
  - `popup.html` is the main HTML structure that defines the popup and the `<div>` that is used as root container for the React components.
  - `popup.module.css` is the CSS module that holds all CSS for the popup.
  - `popup.tsx` holds the UI component that is actually rendered in the popup.

The build script is `build.mjs` and contains all processing instructions for esbuild to handle all the diferent file types:

- `.json` files are copied to the output folder (`dist`).
- `.ts/.tsx` files are transpiled to `.js` files and the output is emitted to `dist`.
- `.css` is used as CSS module and imported in the `.tsx` files.

## Building the extension

Ensure you have nodeJS installed with at least version 20 and install all dependencies by running `npm install`.

You can now use `npm run build` to build and transpile all files. After build, a useable but unbundled extension file structure can be found in the `dist` folder.

Run `npm run clean` to remove the `dist` folder completely, it will be recreated when a new build is started.

### Debugging

After running `npm run build` you can start up your Thunderbird, open the "Add-ons manager" (can be found under "AddOns and Themes" in the main menu), select the gear icon on the Add-ons manager tab and select "Debug Add-ons". A new tab opens and via a click on the button "Load Temporary Add-on…" an "Open File…" dialog should appear. Navigate to the `dist` folder and select the `manifest.json` and confirm to open it. Thunderbird should then load the extension from the directory structure.

### Bundling the extension

To bundle the extension, create a ZIP archive of the contents of the `dist` folder. Do not ZIP the folder itself, as the `manifest.json` must be in the root level of the archive. Rename the file extension of your archive from `.zip` to `.xpi` and you're done.
