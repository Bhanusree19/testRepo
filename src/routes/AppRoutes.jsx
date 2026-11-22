import React from 'react';
import Cover from '../pages/Cover.jsx';

export const routes = [{ name: 'Cover', path: '/cover', component: Cover }];

export default function AppRoutes() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const route = routes.find(({ path: routePath }) => routePath === path);
  if (path === '/' || route) return <Cover />;
  return <main className="not-found"><h1>Page not found</h1><a href="/cover">Go to Cover</a></main>;
}
