export default function StatusBar() {
  return (
    <div className="status-bar" aria-hidden="true">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M1.5 4.2A10.4 10.4 0 0 1 15.5 4.2M4 6.7a6.8 6.8 0 0 1 9 0M6.5 9.1a3.2 3.2 0 0 1 4 0" />
          <circle cx="8.5" cy="11" r="0.7" fill="currentColor" stroke="none" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="3" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
          <rect x="2.4" y="2.4" width="15" height="7.2" rx="1.8" fill="currentColor" />
          <path d="M23 4.2v3.6c1.2-.3 1.7-.9 1.7-1.8s-.5-1.5-1.7-1.8Z" fill="currentColor" opacity="0.55" />
        </svg>
      </div>
    </div>
  );
}
