import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentLayout.css";
import "./Menu.css";

export default function DepartmentLayout({ title, theme, sections, singleMenu }) {
  const navigate = useNavigate();
  const sectionKeys = Object.keys(sections);
  const [active, setActive] = useState(sectionKeys[0]);

  return (
    <div className={`mca-page ${theme}`}>
      {/* HEADER */}
      <div className="mca-header">
        <h1 className="letter-animate">
          {title.split("").map((l, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
              {l}
            </span>
          ))}
        </h1>
      </div>

      {/* BODY */}
      <div className="mca-body">
        {/* LEFT NAV */}
        <div className="pg-sidebar">
          {sectionKeys.map((key) => (
            <button
              key={key}
              className={`pg-btn ${active === key ? "active" : ""}`}
              onClick={() => setActive(key)}
            >
              {key}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="pg-content fade-content">
          <h1>{sections[active].title}</h1>
          {sections[active].custom ? (
            sections[active].custom
          ) : (
            <p>{sections[active].content}</p>
          )}
        </div>
      </div>

      {/* 🔵 NAVIGATION BAR (BOTTOM CENTER) */}
      <div className="me-nav-controls">
        {singleMenu === true ? (
          <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
            <img src="/images/menu.gif" alt="Menu" />
          </button>
        ) : (
          <>
            <button className="me-nav-btn" onClick={() => window.history.back()}>
              <img src="/images/back.gif" alt="Back" />
            </button>

            <button className="me-nav-btn" onClick={() => window.history.forward()}>
              <img src="/images/ford.gif" alt="Forward" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
