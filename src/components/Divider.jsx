export default function Divider({ children = "OR" }) {
  return (
    <div className="divider" role="separator" aria-label={children}>
      <span className="divider__line" />
      <span>{children}</span>
      <span className="divider__line" />
    </div>
  );
}
