import { useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import StatusBar from "./StatusBar";
import Icon from "./Icon";

const navRoutes = ["/home", "/cart", "/account", "/product"];

export default function DeviceFrame() {
  const { pathname } = useLocation();
  const viewportRef = useRef(null);
  const showNav = navRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isCover = pathname === "/";

  useEffect(() => {
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="app-stage">
      <div className="app-stage__grain" aria-hidden="true" />
      {!isCover ? (
        <Link to="/" className="cover-return" aria-label="Back to cover board">
          <Icon name="grid" size={15} />
          <span>Cover</span>
        </Link>
      ) : null}
      <div className={`device ${showNav ? "device--with-nav" : ""}`}>
        <div className="device__notch" aria-hidden="true" />
        <StatusBar />
        <main className="device__viewport scroll-area" ref={viewportRef}>
          <Outlet />
        </main>
        {showNav ? <BottomNav /> : null}
      </div>
    </div>
  );
}
