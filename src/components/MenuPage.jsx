import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Menu.css";

export default function MenuPage() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(true);

  /* ✅ ONLY REQUIRED MENU ITEMS */
  const menuItems = [
    { text: "B.E", path: "/be" },
    { text: "B.Tech", path: "/btech" },
    { text: "B.Arch", path: "/barch" },

    { text: "MBA", path: "/mba" },
    { text: "MCA", path: "/mca" },
    { text: "M.E", path: "/me-menu" },
    { text: "P.H.D", path: "/phd" },

    { text: "Placement", path: "/placement" },
    { text: "Sports", path: "/sports" },
    { text: "Hostel", path: "/hostel" },
    { text: "Transport", path: "/transport" },
    { text: "Scholarship", path: "/scholarship" },
  ];

  /* SHOW MENU AFTER ENQUIRY CLOSE */
  useEffect(() => {
    if (!showEnquiry) {
      setShowMenu(false);
      setTimeout(() => setShowMenu(true), 300);
    }
  }, [showEnquiry]);

  return (
    <div className="menu-page">
      {/* BACKGROUND */}
      <div className="menu-bg" />
      <div
        className={`menu-blur ${
          showEnquiry ? "blur-active" : "blur-inactive"
        }`}
      />

      {/* ENQUIRY FORM */}
      {showEnquiry && (
        <div className="enquiry-overlay">
          <div className="enquiry-form animate-enquiry">
            <span className="close-btn" onClick={() => setShowEnquiry(false)}>
              ×
            </span>

            <h2 className="form-title">Enquiry Form</h2>

            <input id="name" placeholder="Student Name" />
            <input id="phone" placeholder="Mobile Number" />
            <input id="email" placeholder="Email Address" />
            <textarea id="course" placeholder="Course Interested" rows="4" />

            <button
              className="submit-btn"
              onClick={() => {
                const message = `
New College Enquiry
Name: ${document.getElementById("name").value}
Phone: ${document.getElementById("phone").value}
Email: ${document.getElementById("email").value}
Course: ${document.getElementById("course").value}
                `;

                window.open(
                  "https://wa.me/919876543210?text=" +
                    encodeURIComponent(message),
                  "_blank"
                );

                setShowEnquiry(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* MENU PANEL */}
      {!showEnquiry && (
        <div
          className="menu-wrapper"
          style={{
            opacity: showMenu ? 1 : 0,
            transform: showMenu ? "scale(1)" : "scale(0.9)",
            transition: "all 0.6s ease",
          }}
        >
          <div className={`menu-container ${showMenu ? "animate-menu" : ""}`}>
            {/* CENTER ABOUT */}
            <button
              className="menu-btn about"
              onClick={() => navigate("/about")}
            >
              ABOUT
            </button>

            {/* MENU ITEMS */}
            {menuItems.map((item) => (
              <button
                key={item.text}
                className="menu-btn"
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HOME BUTTON */}
      {!showEnquiry && (
        <button
          onClick={() => navigate("/")}
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
          <img src="/images/home.gif" alt="Home" width="64" height="64" />
        </button>
      )}
    </div>
  );
}