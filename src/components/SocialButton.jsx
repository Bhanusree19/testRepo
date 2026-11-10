export default function SocialButton({ icon, children, onClick }) {
  return (
    <button
      type="button"
      className="button button--secondary"
      onClick={onClick}
    >
      <span className="social-buttons__icon">{icon}</span>
      <span>{children}</span>
    </button>
  );
}
