export function FormField({ icon, label, children, trailing }) {
  return (
    <label className="form-field">
      <span className="field-icon">{icon}</span>
      <span className="field-content">
        <span className="field-label">{label}</span>
        {children}
      </span>
      {trailing}
    </label>
  );
}
