import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuButton from "../MenuButton.jsx";


export default function HomeSlider() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  // ▶ Start music on first user interaction (browser rule safe)
  useEffect(() => {
    const startMusic = () => {
      if (!musicStarted && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setMusicStarted(true);
      }
    };

    window.addEventListener("click", startMusic, { once: true });
    window.addEventListener("touchstart", startMusic, { once: true });

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, [musicStarted]);

  // ▶ MENU click → stop music + go to menu page
  const goToMenu = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/menu");
  };

  return (
    <div className="fixed inset-0 overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src="/media/promo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div
        className="fixed inset-0 bg-black/40"
        style={{ pointerEvents: "none" }}
      />

      {/* 🔊 BACKGROUND MUSIC */}
      <audio ref={audioRef} src="/media/promomp3.m4a" loop />

      {/* 🏫 COLLEGE LOGO */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/images/logo.png"
          alt="Adhiyamaan Engineering College"
          className="
            w-48 max-w-[70vw]
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
          "
        />
      </div>

      {/* 🔵 MENU BUTTON */}
    {/* 🔵 MENU BUTTON */}
<MenuButton onMenu={goToMenu} />


    </div>
  );
}
