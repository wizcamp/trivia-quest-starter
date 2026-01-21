import { useGame } from "../hooks/useGame";

/**
 * HUD - Heads Up Display
 *
 * SESSION-08: Students add Scoreboard component
 * SESSION-09: Students add MusicToggle component
 */

// Current Zone Display - Shows active zone information
function CurrentZone() {
  const { currentZone } = useGame();

  if (!currentZone) return null;

  return (
    <div className="zone-info">
      <div className="zone-name">{currentZone.name}</div>
      <div className="zone-theme">{currentZone.subtitle}</div>
    </div>
  );
}

// Main HUD component
export default function HUD() {
  return <CurrentZone />;
}
