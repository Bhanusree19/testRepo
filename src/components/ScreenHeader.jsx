import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function ScreenHeader({ title, to, right, transparent = false }) {
  const navigate = useNavigate();

  const goBack = () => {
    if (to) {
      navigate(to);
      return;
    }
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <header className={`screen-header ${transparent ? "screen-header--transparent" : ""}`}>
      <button type="button" className="icon-button" onClick={goBack} aria-label="Go back">
        <Icon name="arrow-left" size={20} />
      </button>
      {title ? <h1 className="screen-header__title">{title}</h1> : <span />}
      <div className="screen-header__right">{right}</div>
    </header>
  );
}
