import { Link, useNavigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import Button from "../components/ui/Button";
import { onboardingSlides } from "../data/onboarding";

function RoomArt() {
  return (
    <svg viewBox="0 0 320 300" aria-hidden="true">
      <path d="M14 246h292" stroke="#3d3a33" strokeWidth="2" opacity="0.18" />
      <path d="M52 246V94a64 64 0 0 1 128 0v152" fill="none" stroke="#b0553a" strokeWidth="3" opacity="0.5" />
      <rect x="70" y="162" width="92" height="60" rx="14" fill="#b9a98d" stroke="#3d3a33" strokeWidth="2.4" />
      <rect x="80" y="138" width="72" height="36" rx="12" fill="#cbb79d" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M82 218v20M150 218v20" stroke="#3d3a33" strokeWidth="5" strokeLinecap="round" />
      <circle cx="222" cy="118" r="36" fill="#efd9c9" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M222 82v-20M198 72l-10-16M246 72l10-16" stroke="#5f6b4f" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="204" y="212" width="60" height="34" rx="8" fill="#d9cbb6" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M216 212v-8h36v8" stroke="#3d3a33" strokeWidth="2.4" />
      <circle cx="86" cy="258" r="16" fill="#5f6b4f" opacity="0.55" />
      <path d="M46 268h40M164 268h34M270 268h24" stroke="#3d3a33" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

function MaterialsArt() {
  return (
    <svg viewBox="0 0 320 300" aria-hidden="true">
      <rect x="30" y="58" width="120" height="180" rx="14" fill="#e3d7c6" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M52 200c22-42 44-42 66 0M52 172c18-28 34-28 50 0" fill="none" stroke="#8c6b4c" strokeWidth="2.2" opacity="0.7" />
      <rect x="170" y="88" width="120" height="150" rx="14" fill="#d7dcc9" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M186 128h88M186 168h88M186 208h88" stroke="#5f6b4f" strokeWidth="2" opacity="0.55" />
      <circle cx="230" cy="150" r="26" fill="#b0553a" opacity="0.75" />
      <path d="M98 250c18-14 36-14 54 0" stroke="#3d3a33" strokeWidth="2" opacity="0.25" fill="none" />
      <path d="M204 250h56" stroke="#3d3a33" strokeWidth="2" opacity="0.25" />
      <path d="M262 58c-10 14-10 28 0 40" fill="none" stroke="#8c6b4c" strokeWidth="2.4" />
      <circle cx="56" cy="82" r="5" fill="#b0553a" />
    </svg>
  );
}

function DeliveryArt() {
  return (
    <svg viewBox="0 0 320 300" aria-hidden="true">
      <path d="M22 240h276" stroke="#3d3a33" strokeWidth="2" opacity="0.2" />
      <rect x="46" y="104" width="132" height="88" rx="8" fill="#e3d7c6" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M178 126h50l28 32v34h-78v-66Z" fill="#d9cbb6" stroke="#3d3a33" strokeWidth="2.4" />
      <path d="M198 134v24h44" fill="none" stroke="#3d3a33" strokeWidth="2.2" opacity="0.5" />
      <circle cx="90" cy="198" r="18" fill="#3d3a33" />
      <circle cx="222" cy="198" r="18" fill="#3d3a33" />
      <circle cx="90" cy="198" r="7" fill="#e3d7c6" />
      <circle cx="222" cy="198" r="7" fill="#e3d7c6" />
      <path d="M24 84h52M24 100h30" stroke="#5f6b4f" strokeWidth="3" strokeLinecap="round" />
      <path d="M250 76c14-18 34-20 48-6-10 18-30 22-48 6Z" fill="#5f6b4f" opacity="0.65" />
      <path d="M268 92h44" stroke="#8c6b4c" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

const artMap = { room: RoomArt, materials: MaterialsArt, delivery: DeliveryArt };

export default function Onboarding() {
  const { step } = useParams();
  const navigate = useNavigate();
  const index = Math.min(Math.max(Number(step) || 1, 1), onboardingSlides.length) - 1;
  const slide = onboardingSlides[index];
  const Art = artMap[slide.art] ?? RoomArt;
  const isLast = index === onboardingSlides.length - 1;

  return (
    <div className="onboarding">
      <header className="onboarding__top">
        <button
          type="button"
          className="icon-button"
          onClick={() => (index === 0 ? navigate("/splash") : navigate(`/onboarding/${index}`))}
          aria-label="Go back"
        >
          <Icon name="arrow-left" size={20} />
        </button>
        <div className="onboarding__progress" aria-hidden="true">
          {onboardingSlides.map((item, dotIndex) => (
            <span key={item.id} className={dotIndex <= index ? "is-filled" : ""} />
          ))}
        </div>
        <Link to="/login" className="onboarding__skip">
          Skip
        </Link>
      </header>

      <div className="onboarding__art" style={{ "--accent": slide.accent }}>
        <Art />
      </div>

      <div className="onboarding__copy">
        <p className="eyebrow">
          0{slide.id} — {slide.eyebrow}
        </p>
        <h1 className="onboarding__title">{slide.title}</h1>
        <p className="onboarding__body">{slide.body}</p>
      </div>

      <footer className="onboarding__foot">
        <div className="onboarding__dots" aria-label={`Step ${index + 1} of ${onboardingSlides.length}`}>
          {onboardingSlides.map((item, dotIndex) => (
            <Link
              key={item.id}
              to={`/onboarding/${item.id}`}
              className={dotIndex === index ? "is-active" : ""}
              aria-label={`Go to onboarding step ${item.id}`}
              aria-current={dotIndex === index ? "step" : undefined}
            />
          ))}
        </div>
        <Button onClick={() => navigate(isLast ? "/login" : `/onboarding/${index + 2}`)} full size="lg">
          {isLast ? "Get started" : "Continue"}
          <Icon name="arrow-right" size={18} />
        </Button>
      </footer>
    </div>
  );
}
