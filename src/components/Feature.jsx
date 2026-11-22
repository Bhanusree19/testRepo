import React from 'react';

export default function Feature({ ids, children }) {
  return (
    <li className="feature" data-fid={ids[0]}>
      <span className="feature-icon" data-fid={ids[1]} aria-hidden="true">
        <svg data-fid={ids[2]} width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm7.1 16.8 9.2-9.2-1.7-1.7-7.5 7.5-3.7-3.7-1.7 1.7 5.4 5.4Z" />
        </svg>
      </span>
      <span data-fid={ids[3]}>{children}</span>
    </li>
  );
}
