# NOVA Living

A multi-screen furniture and home-objects shopping experience built with React JS and Vite.

The app contains a design cover board plus the full mobile flow it presents:

- Cover board (screen index)
- Splash screen
- Onboarding 1, 2 and 3
- Login and Register
- Home
- Product Detail
- Cart
- My Account

## Getting started

This project uses npm and Vite.

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

## Validation

```bash
npm run build
npm run preview
```

## Project structure

```
index.html
public/
src/
  components/   shared UI, device frame, navigation, product art
  context/      cart state provider
  data/         product catalogue and onboarding content
  pages/        every screen in the flow
  routes/       route configuration
  styles/       global styles
  theme/        design tokens
  main.jsx
```

## Navigation

`/` is the cover board. Selecting any preview (or "Enter app") opens the flow.

```
/ -> /splash -> /onboarding/1 -> /onboarding/2 -> /onboarding/3
   -> /login -> /home -> /product/:id -> /cart -> /account
```

`/register` is reachable from Login. The in-app bottom navigation links Home,
Shop, Cart and Account, and every child screen supports back navigation.

<!-- design-engineer:implement/screenshot_1-screens-1794238457794 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/screenshot_1-screens-1794238457794`:

- Screenshot_1

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React JS (web) app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
