# Try it out

React Native app using Expo, TypeScript, React Navigation, and npm.

## Development

- `npm install`
- `npm start` starts the Expo development server. Press `w` for web, `a` for Android, or `i` for iOS.
- `npm run web` starts web directly.
- `npm run typecheck` checks TypeScript.
- `npm run build:web` exports the web app into `dist`.

The initial screen is **Try it out**, directly available at `/try-it-out` on web. Native deep links use `try-it-out://try-it-out`. Inter Medium is bundled through the Expo Google Fonts package.

Source lives in `src/screens`, `src/components`, `src/navigation`, and `src/theme`. Design node IDs are retained as `testID` values.

## Design source limitations

The supplied extraction has no interactions, destination screens, or transitions, so the illustrated widget rows are static. Image node `1:1422` (`image 154`, 537×734) has no asset data or URL; its layout space is retained pending the original asset. Vector paths were also absent; the small icons and Asana wordmark are approximations. An exact visual match requires the original image and vector artwork.

Validation in the implementation environment: dependency installation was blocked by DNS resolution (`EAI_AGAIN` for registry.npmjs.org). TypeScript, web export, and Expo startup were attempted but could not run because their executables were not installed. Run the commands above once package registry access is available.

<!-- design-engineer:implement/try_it_out-screens-1795625008466 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/try_it_out-screens-1795625008466`:

- Try_it_out

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React Native app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
