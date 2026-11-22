# Home Store Cover

React JS application built with Vite. Uses npm and Node.js 18+.

## Run

```sh
npm install
npm run dev
```

Open `/` or `/cover` (the canonical Cover route).

## Validate and preview

```sh
npm run build
npm run preview
```

The supplied design has no navigation interactions or transitions. The seven phone previews are flattened image nodes, not additional app screens. Their image assets were not included in the design context, so only their specified geometry and borders can be rendered. Supply the original assets to complete these previews.

Manrope weights 700 and 800 load from Google Fonts and require network access. The original 1600 × 960 canvas coordinates, including clipped content, are preserved. Screen implementation lives in `src/pages`, shared elements in `src/components`, route configuration in `src/routes`, and styling in `src/styles`.

<!-- design-engineer:implement/cover-screens-1795355947869 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/cover-screens-1795355947869`:

- Cover

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React JS (web) app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
