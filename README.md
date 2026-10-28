# Field Sales Workspace

React JS application built with Vite. Requires Node.js 18+ and npm.

## Run

```sh
npm install
npm run dev
```

## Validate

```sh
npm run build
```

Preview the production build with `npm run preview`.

## Screens

- `/#/attendance` (initial route): start your day, attendance summary.
- `/#/metrics`: targets, achievement, sales charts, promotions and upcoming visits.

“Start day” opens the metrics screen. The Attendance link and browser Back return to the attendance screen. Hash routes allow direct links without server rewrite configuration. Shared components live in `src/components`, screen implementations in `src/pages`, navigation in `src/routes`, and theme styles in `src/styles`.

The supplied design extracts contain no explicit transition destinations or image URLs. The app uses the Start day action to connect the supplied screens, local SVG illustrations and a text brand approximation. Other destinations open contextual dialogs. Period controls, account search, promotions, and local lead creation are interactive. All metrics and attendance/location labels are demo data; no location is collected and no Salesforce or SAP connection is made. New leads are saved locally in the browser. Plus Jakarta Sans is loaded from Google Fonts, with a sans-serif fallback.

<!-- design-engineer:implement/tracking_attendance_x2_start_your_day-screens-1793218115969 -->
## Test implemented screens

This implementation was generated from the Figma design context for these screens on branch `implement/tracking_attendance_x2_start_your_day-screens-1793218115969`:

- Tracking_Attendance_X2_Start_your_day
- Metrics_Targets_vs_achievement_Home

1. Clone this branch and install dependencies using the repository's documented package manager.
2. Start the React JS (web) app using the existing README command.
3. Open every implemented screen through the navigation flow and verify the initial route, links, transitions, and back behavior.
4. Verify each screen's layout, typography, spacing, interactions, and responsive behavior against Figma.
5. Run the repository's documented test and lint commands before accepting the pull request.
