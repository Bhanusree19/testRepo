import { useId } from "react";

export default function TextField({
  label,
  hint,
  error,
  icon,
  trailing,
  className = "",
  id: providedId,
  ...rest
}) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={`field ${error ? "field--error" : ""} ${className}`}>
      <div className="field__top">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        {hint ? (
          <span className="field__hint" id={`${id}-hint`}>
            {hint}
          </span>
        ) : null}
      </div>
      <div className="field__control">
        {icon ? <span className="field__icon">{icon}</span> : null}
        <input id={id} className="field__input" aria-invalid={Boolean(error)} aria-describedby={describedBy} {...rest} />
        {trailing ? <span className="field__trailing">{trailing}</span> : null}
      </div>
      {error ? (
        <span className="field__error" id={`${id}-error`} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
