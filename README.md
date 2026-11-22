# Home Store Cover

Expo / React Native app using TypeScript and npm. React Navigation exposes the supplied Cover screen at `/cover`; `/` also opens Cover. Manrope 700 and 800 are bundled through `@expo-google-fonts/manrope`, so rendering does not depend on a font CDN.

## Run

```sh
npm install
npm start
```

Press `w` for web, or use `npm run web`. Use `npm run android` or `npm run ios` with an appropriate simulator or Expo Go.

## Validate

```sh
npm run typecheck
npm run build:web
```

The web export is written to `dist/`. A web host should serve `index.html` for `/cover`.

## Structure

- `App.tsx`: bundled font loading
- `src/navigation`: initial route and deep linking
- `src/screens`: Cover composition
- `src/components`: shared feature rows and preview frames
- `src/theme`: colors and typography
- `design-engineer.fidelity.json`: route and Figma root mapping

## Design source limitations

The supplied extraction contains seven image rectangles but no bitmap files, image URLs, or image data. Their tagged borders and dimensions are implemented; the original preview artwork must be supplied to `PhonePreview` through its `source` prop to complete image fidelity. No replacement artwork has been invented.

Page coordinates are normalized against the supplied origin (-158, -215). At 1600 × 960 this places the phone collage at x=788 and the heading at x=1454, clipping most of the heading at the right frame edge. This follows the supplied geometry. Below 1000px, the cover copy reflows for readability. The JSON contains no interactions, root interactions, or destination screens; the preview names and “10 Screens” label are presentation content rather than routes.

Validation in the implementation environment: all 29 supplied Figma node IDs were checked against the source, and `git diff --check` passed. Dependency installation was blocked by DNS resolution (`EAI_AGAIN` for registry.npmjs.org). Consequently type checking, Expo export, and app startup were attempted but could not run because TypeScript and Expo were unavailable. Run the commands above after installing dependencies in a network-enabled environment.

<!-- design-engineer:implement/cover-screens-1795356859986 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/cover-screens-1795356859986`:

- Cover

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React Native app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
