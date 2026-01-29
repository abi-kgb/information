import "./BTech.css";
import { Link, useNavigate } from "react-router-dom";

export default function BTech() {
  const navigate = useNavigate();

  return (
    <div className="btech-page">
      {/* 🎥 VIDEO BACKGROUND */}
      <video className="btech-video-bg" autoPlay loop muted playsInline>
        <source src="/media/btechback.mp4" type="video/mp4" />
      </video>

      {/* 🌑 DARK OVERLAY */}
      <div className="video-overlay"></div>

      <h3 className="btech-title">B.Tech</h3>

      <div className="btech-buttons">
        <Link to="/btech/aids" className="btech-btn">
          Artificial Intelligence & Data Science
        </Link>

        <Link to="/btech/biotech" className="btech-btn">
          Biotechnology
        </Link>

        <Link to="/btech/chem" className="btech-btn">
          Chemical Engineering
        </Link>

        <Link to="/btech/csb" className="btech-btn">
          Computer Science and Business Systems
        </Link>

        <Link to="/btech/it" className="btech-btn center-btn">
          Information Technology
        </Link>
      </div>

      {/* 🔵 NAVIGATION BAR (Back, Forward) */}
      <div className="me-nav-controls">
        <button className="me-nav-btn" onClick={() => window.history.back()}>
          <img src="/images/back.gif" alt="Back" />
        </button>

        <button className="me-nav-btn" onClick={() => window.history.forward()}>
          <img src="/images/ford.gif" alt="Forward" />
        </button>
      </div>
    </div>
  );
}
