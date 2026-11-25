# testRepo

React Native application using Expo, TypeScript, React Navigation and npm.

## Development

```sh
npm install
npm start
```

Use `npm run web` for Chromium, `npm run ios` for iOS, or `npm run android` for Android. Login is the initial screen and is directly accessible at `/login` on web or `testrepo://login` on native. Web hosting must rewrite application routes to `index.html`.

## Validation

```sh
npm run typecheck
npm run build:web
```

## Structure and design

`src/screens` contains screens, `src/components` reusable controls, `src/navigation` routes and linking, and `src/theme` shared tokens. Figma node IDs are retained as test IDs. The supplied design has no interaction or destination metadata, so no additional routes or transitions are invented. The login button validates input and reports the missing backend; authentication is not simulated. Recovery and registration copy have no supplied destinations.

The extraction references an Auth background image without providing image data or a URL, so the screen retains the specified white root background. Web declares SF Pro medium and bold faces from Apple's font CDN; this requires network access and font loading could not be verified in the restricted build environment. Native iOS uses its system font. The subtitle retains its extracted 44px box and 28.64px line height, with visible text overflow and a 75px gap before the form. Field labels are separate tagged text layers over editable inputs. Narrow screens use flexible text widths and a smaller heading.

The fidelity manifest continues to map Login to root node 1284:225 and /login. No new fidelity score is claimed. Build and typecheck were attempted after these changes but could not run because Expo and TypeScript are not installed; dependency installation was blocked by unavailable network access and an empty npm cache.

<!-- design-engineer:implement/login-screens-1795624587239 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/login-screens-1795624587239`:

- Login

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React Native app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
