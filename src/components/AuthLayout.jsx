import HomeIndicator from "./HomeIndicator";
import StatusBar from "./StatusBar";

export default function AuthLayout({ children }) {
  return (
    <div className="app-shell">
      <div className="phone">
        <StatusBar />
        <main className="main-content">{children}</main>
        <HomeIndicator />
      </div>
    </div>
  );
}
