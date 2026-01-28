import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeSlider() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const idleTimerRef = useRef(null);

  const [musicStarted, setMusicStarted] = useState(false);

  /* ▶ Start music on first user interaction */
  useEffect(() => {
    const startMusic = () => {
      if (!musicStarted && audioRef.current) {
        audioRef.current.play().catch(() => { });
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

  /* ▶ Idle timeout → go Home after 2 mins */
  useEffect(() => {
    const resetIdleTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      idleTimerRef.current = setTimeout(() => {
        navigate("/");
      }, 120000); // 2 minutes
    };

    resetIdleTimer();

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("mousedown", resetIdleTimer);
    window.addEventListener("touchstart", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);

    return () => {
      clearTimeout(idleTimerRef.current);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("mousedown", resetIdleTimer);
      window.removeEventListener("touchstart", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
    };
  }, [navigate]);

  /* ▶ Click text → stop music + go to menu */
  const goToMenu = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    navigate("/menu", { state: { fromHome: true } });
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
          className="w-48 max-w-[70vw]
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* 👉 CLICK HERE FOR MORE */}
      <div
        onClick={goToMenu}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "blue",
          color: "white",
          /* 🔽 Responsive bottom spacing */
          bottom: "clamp(8px, 3vh, 28px)",

          /* 📐 Responsive width control */
          maxWidth: "90vw",
          textAlign: "center",

          /* 📱 Mobile safe-area support */
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        className="
    fixed z-30
    text-white
    text-sm sm:text-base md:text-lg lg:text-xl
    uppercase tracking-[0.2em]
    cursor-pointer select-none

    px-6 sm:px-8 py-3
    rounded-full

    bg-white/10 backdrop-blur-md
    border border-white/40

    shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_35px_rgba(0,180,255,0.35)]
    animate-[pulse_2.5s_ease-in-out_infinite]

    hover:bg-white/20
    hover:shadow-[0_0_25px_rgba(255,255,255,0.8),0_0_50px_rgba(0,180,255,0.6)]
    hover:scale-105

    transition-all duration-300
  "
      >
        Click here for more
      </div>

    </div>
  );
}
