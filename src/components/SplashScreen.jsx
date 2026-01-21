import GameLogo from "./GameLogo";

/**
 * SPLASH SCREEN - Welcome to the Game!
 *
 * SESSION-02: Students add start and credits buttons
 * SESSION-03: Students add startGame and showCredits functionality
 */

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <GameLogo />
      <div className="splash-buttons"></div>
    </div>
  );
}
