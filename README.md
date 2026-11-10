# testRepo

A mobile-first React authentication flow built with Vite. The app recreates the
supplied Figma login screen and connects its navigation to matching registration
and password-recovery screens.

## Stack

- React 18
- Vite
- React Router
- Vitest and Testing Library

## Commands

```bash
npm install
npm run dev
npm run build
npm test
```

The development server is started with `npm run dev` (Vite prints the local URL,
usually http://localhost:5173).

## Routes

- `/` or `/login` - Login
- `/forgot-password` - Password recovery
- `/register` - Account registration

## Structure

```
src/
  components/   Shared auth UI, phone chrome, and icons
  pages/        Login, ForgotPassword, and Register screens
  routes/       Application route configuration
  styles/       Design tokens and shared auth styles
  test/         Vitest setup
```

<!-- design-engineer:implement/login-screens-1794330378240 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/login-screens-1794330378240`:

- Login

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React JS (web) app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
