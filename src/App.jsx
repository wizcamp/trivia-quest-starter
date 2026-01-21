/**
 * APP COMPONENT - The Main Screen Controller
 *
 * SESSION-01: Students replace StartHere with SplashScreen component
 * SESSION-03: Students add screen navigation with conditional rendering
 * SESSION-07: Students add QuizModal conditional rendering
 * SESSION-08: Students add GameOver screen navigation
 */

import StartHere from "./components/StartHere";

export default function App() {
  return (
    <div className="app-container">
      <StartHere />
    </div>
  );
}
