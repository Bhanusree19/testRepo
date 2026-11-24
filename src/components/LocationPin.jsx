import React from 'react';
export default function LocationPin({ groupId, pathId, width = 9, height = 11 }) {
 return <span data-fid={groupId} className="pin"><svg width={width} height={height} viewBox="0 0 12 15" aria-hidden="true"><path data-fid={pathId} fill="currentColor" d="M6 0a6 6 0 0 0-6 6c0 4 6 9 6 9s6-5 6-9a6 6 0 0 0-6-6Zm0 8.2A2.2 2.2 0 1 1 6 3.8a2.2 2.2 0 0 1 0 4.4Z"/></svg></span>;
}
