import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function Aeronautical() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-aero">
            {/* TITLE */}
            <h1 className="dept-title">✈️ Aeronautical Engineering</h1>

            {/* NAVIGATION TABS */}
            <div className="dept-tabs" role="tablist" aria-label="Aeronautical sections">
                {["About", "Infrastructure", "Career", "Contact"].map((tab) => (
                    <button
                        key={tab}
                        role="tab"
                        aria-selected={active === tab}
                        aria-pressed={active === tab}
                        className={`tab-btn ${active === tab ? "active" : ""}`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* CONTENT AREA */}
            <div className="dept-content">
                {active === "About" && <About />}
                {active === "Infrastructure" && <Infrastructure />}
                {active === "Career" && <Career />}
                {active === "Contact" && <Contact />}
            </div>

            {/* 🔵 NAVIGATION BAR */}
            <div className="me-nav-controls">
                <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
                    <img src="/images/menu.gif" alt="Menu" />
                </button>
            </div>
        </div>
    );
}

/* ================= SECTIONS ================= */

function About() {
    return (
        <div className="glass-card about-animate">
            <p className="about-line delay-1">
                The Department of <span className="highlight">Aeronautical Engineering</span> offers a
                four-year undergraduate programme focused on the science and practice
                of air and space flight.
            </p>

            <p className="about-line delay-2">
                The programme covers aircraft and spacecraft design, development,
                testing, production, maintenance, and operation, preparing students
                for careers in aviation and aerospace industries.
            </p>

            <p className="about-line delay-3">
                Strong foundations are built in aerospace systems, manufacturing
                technologies, airworthiness, safety standards, and high-performance
                engineering systems.
            </p>

            <p className="about-line delay-4">
                With a qualified faculty team and active involvement in research,
                conferences, and professional training, the department promotes
                innovation, technical excellence, and leadership skills.
            </p>

            <p className="glow-txt about-vision delay-5">
                ✈️ Integrating engineering knowledge to shape the future of aerospace
                technology.
            </p>
        </div>
    );
}

function Infrastructure() {
    const images = [
        "/images/be/aero1.jpg.jpeg",
        "/images/be/aero2.jpg.jpeg",
        "/images/be/aero3.jpg.jpeg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img
                src={images[current]}
                alt="Aeronautical Infrastructure"
                className="infra-slide-img"
            />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "UAV / Drone Engineer", icon: "🚀" },
        { title: "Propulsion Specialist", icon: "✈️" },
        { title: "Spacecraft Engineer", icon: "🛰️" },
        { title: "Avionics Engineer", icon: "⚙️" },
    ];

    return (
        <div className="glass-card career-section">
            <h2 className="career-heading">Career Opportunities</h2>

            <div className="career-grid">
                {careers.map((career, index) => (
                    <div
                        key={career.title}
                        className="career-card"
                        style={{ animationDelay: `${index * 0.12}s` }}
                    >
                        <span className="career-icon">{career.icon}</span>
                        <p>{career.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="glass-card pop">
            <p>📧 aeronautical@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}