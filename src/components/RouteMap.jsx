export function RouteMap() {
  return (
    <div className="route-map" aria-label="Stylised route through Kerala">
      <div className="sun-glow" />
      <div className="horizon horizon-one" />
      <div className="horizon horizon-two" />
      <svg className="route-line" viewBox="0 0 358 170" preserveAspectRatio="none" aria-hidden="true">
        <path d="M38 123 C74 130 81 64 147 74 S213 114 251 89 S289 72 318 45" />
        <circle cx="38" cy="123" r="6" className="start-dot" />
        <circle cx="147" cy="74" r="4" className="waypoint" />
        <circle cx="251" cy="89" r="4" className="waypoint" />
        <circle cx="318" cy="45" r="7" className="end-dot" />
      </svg>
    </div>
  )
}
