import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Menu.css"; // reuse SAME menu CSS

export default function MEMenu() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  /* ✅ ONLY 5 M.E MENU ITEMS */
  const meMenuItems = [
    { text: "M.E. Communication System Engineering", path: "/me/communication" },
    { text: "M.E. Computer Science Engineering", path: "/me/cse" },
    { text: "M.E. Engineering Design", path: "/me/design" },
    { text: "M.E. Power System Engineering", path: "/me/power" },
    { text: "M.E. Structural Engineering", path: "/me/structural" },
  ];

  /* SHOW MENU WITH ANIMATION */
  useEffect(() => {
    setTimeout(() => setShowMenu(true), 200);
  }, []);

  return (
    <div className="menu-page me-menu">
      {/* BACKGROUND */}
      <div className="menu-bg" />
      <div className="menu-blur blur-inactive" />

      {/* M.E CUSTOM LAYOUT */}
      <div
        className="me-menu-layout"
        style={{
          opacity: showMenu ? 1 : 0,
          transform: showMenu ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}
      >
        {/* LEFT SIDE */}
        <div className="me-left">
          <h2 className="me-title">M.E PROGRAMMES</h2>
          <p className="me-sub">Choose your specialization</p>
        </div>

        {/* RIGHT SIDE – VERTICAL BUTTONS */}
        <div className="me-right">
          {meMenuItems.map((item, index) => (
            <button
              key={item.text}
              className="menu-btn me-btn"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* UNDO / REDO – ONLY FOR ME MENU */}
      <div className="me-nav-controls">
        <button
          className="me-nav-btn"
          onClick={() => window.history.back()}
        >
          <img src="/images/back.gif" alt="Undo" />
        </button>

        <button
          className="me-nav-btn"
          onClick={() => window.history.forward()}
        >
          <img src="/images/ford.gif" alt="Redo" />
        </button>
      </div>

      {/* BACK TO MAIN MENU */}
      <button
        onClick={() => navigate("/menu")}
        className="back-btn"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999999,
          width: "72px",
          height: "72px",
          borderRadius: "18px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 25px rgba(37,99,235,0.9)",
          animation: "floatBtn 2.8s ease-in-out infinite",
        }}
      >
        <img src="/images/home.gif" alt="Menu" width="64" height="64" />
      </button>
    </div>
  );
}