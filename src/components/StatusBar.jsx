import {
  BatteryIcon,
  CellularIcon,
  WifiIcon,
} from "./icons";

export default function StatusBar({ time = "18:41" }) {
  return (
    <div className="status-bar" aria-hidden="true">
      <span className="status-bar__time">{time}</span>
      <span className="status-bar__icons">
        <CellularIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}
