import React from 'react';

// The extraction contains image geometry but no image URL, bytes or asset reference.
export default function ScreenPreview({ id, name, width = 245, height = 531 }) {
  return <div className="screen-preview" data-fid={id} role="img" aria-label={`${name} preview (image asset not supplied)`} style={{ width, height }} />;
}
