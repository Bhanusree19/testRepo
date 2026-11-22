# Travel

React Native / Expo app using TypeScript and npm.

## Run

```sh
npm install
npm start
```

Press `w` for web, or run `npm run web`. Native development: `npm run android` or `npm run ios`.

## Validation

```sh
npm run typecheck
npm run build:web
```

The initial screen is also directly accessible at `/travel-screen-2`. React Navigation provides URL linking and native navigation infrastructure. The supplied design includes no interactions, destinations, or transition metadata, so no additional routes are invented.

Fonts are bundled through Expo Google Fonts. The supplied extraction marks six image regions but contains no image URLs, image data, or exported assets. Their transparent frames retain the supplied dimensions and radii; provide original assets to complete their contents. The Lato emoji uses the available bold font and the platform emoji renderer.

<!-- design-engineer:implement/travel_screen_2-screens-1795360177200 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/travel_screen_2-screens-1795360177200`:

- travel_screen_2

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React Native app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
