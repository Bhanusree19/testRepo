import React from 'react';
export default function Story({ ids, label = 'India', coral = false }) {
  return <div className="story" data-fid={`fid:1277:${ids[0]}`}><div className={`story-outline ${coral ? 'coral' : ''}`} data-fid={`fid:1277:${ids[1]}`}><div className="story-image" role="img" aria-label={`${label} image unavailable`} data-fid={`fid:1277:${ids[2]}`} /></div><span data-fid={`fid:1277:${ids[3]}`}>{label}</span></div>;
}
