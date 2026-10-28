# Forma — digital experience

React JS application built with Vite and npm.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173).

## Validation

```sh
npm run build
npm run preview
```

## Structure

- `src/pages/Cover.jsx`: responsive cover and linked screen previews.
- `src/components/Screen.jsx`: shared screen layouts and demo interactions.
- `src/routes/screens.js`: screen names and hash routes; browser back/forward is supported.
- `src/styles/global.css`: shared theme and responsive styles.

The initial route is `#/`. Each named screen is accessible at `#/screens/<screen-id>` and through the preview selector. Bag state persists while navigating within the app. Account forms are local demonstrations; there is no authentication or payment backend.

The supplied design context describes a cover containing image rectangles, but does not include the original images, typography, copy, or transitions. Screen interiors and the cover typography are interpretive reconstructions; the rounded black frames and neutral blurred background follow the supplied properties. Photography loads from Unsplash and fonts from Google Fonts, with local system font fallbacks.

<!-- design-engineer:implement/screenshot_1-screens-1793214883473 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/screenshot_1-screens-1793214883473`:

- Screenshot_1

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React JS (web) app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
