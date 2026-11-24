# Welcome UI Kit

Expo / React Native app using TypeScript and npm. The supplied welcome screen is
available on iOS, Android, and web, with React Navigation linking at `/welcome`.

## Development

```sh
npm install
npm start
```

Press `w` for web, `i` for the iOS simulator, or `a` for Android. Alternatively,
run `npm run web`, `npm run ios`, or `npm run android`.

## Validation

```sh
npm run typecheck
npx expo export --platform web
```

Serve `dist` with an SPA fallback to `index.html` for direct `/welcome` requests.
There was no existing test framework in the source repository.

## Structure

- `src/screens`: screen composition and responsive scrolling.
- `src/components`: shared auto-layout renderer with persistent Figma test IDs.
- `src/design`: implementation data copied from the supplied design, independent
  of temporary extraction files.
- `src/navigation`: initial screen, native stack, and URL linking.
- `src/theme`: shared tokens and web font declarations.

The 800px design uses 80px padding and exact supplied typography and spacing.
Narrow displays use 24px horizontal padding and naturally wrap text. No prototype
interactions, timeout transitions, or destinations were included in the extraction.
The explicit feedback URL opens with React Native Linking.

## Asset limitations

The extraction includes three avatar rectangles but no image files or image URLs.
Neutral circles preserve their size and radius until the original assets are supplied.
Web resolves installed SF Pro faces first, then loads SF Pro from the
San-Francisco-Pro-Fonts GitHub mirror; iOS uses the built-in system font. Offline
web use requires locally supplied licensed font files, and Android currently uses
its platform sans-serif font. Font CDN availability must be verified in a networked
browser. Web includes explicit system sans-serif fallbacks while fonts load.
The extraction contains no destination for the Changelog label.

Dependency installation and runtime validation require access to the npm registry.

<!-- design-engineer:implement/📘_welcome-screens-1795548767813 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/📘_welcome-screens-1795548767813`:

- 📘_Welcome

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React Native app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
