import React from 'react';
import Feature from '../components/Feature.jsx';
import ScreenPreview from '../components/ScreenPreview.jsx';

const features = [
  { ids: ['1032:601', '1032:604', '1032:605', '1032:603'], label: 'Full Customizable' },
  { ids: ['1032:611', '1032:612', '1032:613', '1032:614'], label: 'Style Guide' },
  { ids: ['1032:615', '1032:616', '1032:617', '1032:618'], label: 'Figma Components' },
  { ids: ['1032:619', '1032:620', '1032:621', '1032:622'], label: 'Well Organized Layout' },
];

export default function Cover() {
  return (
    <main className="cover" data-fid="310:234" aria-labelledby="cover-title">
      <div className="cover-copy" data-fid="310:245">
        <h1 id="cover-title" data-fid="310:235">Home Store Mobile App UI Kit</h1>
        <div className="screen-count" data-fid="1017:704"><span data-fid="1017:705">10 Screens</span></div>
        <ul className="features" data-fid="1032:606">
          {features.map(({ ids, label }) => <Feature key={ids[0]} ids={ids}>{label}</Feature>)}
        </ul>
      </div>
      <div className="preview-columns">
        <div className="preview-column first-column">
          <ScreenPreview id="1017:706" name="Onboarding 1" width={246} />
          <ScreenPreview id="1017:714" name="Splash Screen" />
          <ScreenPreview id="1017:713" name="Login" />
        </div>
        <div className="preview-column second-column">
          <ScreenPreview id="1017:709" name="Home" />
          <ScreenPreview id="1017:710" name="My Account" />
        </div>
        <div className="preview-column third-column">
          <ScreenPreview id="1017:708" name="Cart" />
          <ScreenPreview id="1017:707" name="Product Detail" width={246} height={532} />
        </div>
      </div>
    </main>
  );
}
