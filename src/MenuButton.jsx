import { createPortal } from "react-dom";

export default function MenuButton({ onMenu }) {
  const handleClick = (e) => {
    console.log("MENU CLICKED");

    // 💥 Ripple effect
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.7)";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.transform = "translate(-50%, -50%) scale(1)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    onMenu();
  };

  return createPortal(
    <button
      onClick={handleClick}
      aria-label="Open menu"
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
        transition: "transform 0.25s ease, background 0.25s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3b82f6";
        e.currentTarget.style.transform =
          "translateX(-50%) scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#2563eb";
        e.currentTarget.style.transform = "translateX(-50%)";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform =
          "translateX(-50%) scale(0.95)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform =
          "translateX(-50%) scale(1.1)";
      }}
    >
      {/* 🔵 MENU GIF */}
      <img
        src="/images/menu.gif"   // 👈 put your gif here
        alt=""
        aria-hidden="true"
        style={{
          width: "60px",
          height: "60px",
          pointerEvents: "none",
        }}
      />
    </button>,
    document.body
  );
}