import { useId } from "react";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  trailing,
  autoComplete,
  error,
}) {
  const id = useId();
  const messageId = `${id}-message`;

  return (
    <div className={`field${error ? " field--error" : ""}`}>
      {icon ? <span className="field__icon">{icon}</span> : null}
      <div className="field__body">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className="field__input"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? messageId : undefined}
        />
        {error ? (
          <span id={messageId} className="form-message form-message--error">
            {error}
          </span>
        ) : null}
      </div>
      {trailing}
    </div>
  );
}
