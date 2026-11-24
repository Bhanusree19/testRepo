import React from 'react';
import TravelScreen from '../pages/TravelScreen';
export const routes = [{ name: 'travel screen 2', path: '/travel-screen-2', component: TravelScreen }];
export default function AppRoutes() {
  if (window.location.pathname === '/') window.history.replaceState(null, '', routes[0].path);
  const route = routes.find(route => route.path === window.location.pathname);
  return route ? <route.component /> : <main><h1>Page not found</h1><a href="/travel-screen-2">Let’s travel</a></main>;
}
