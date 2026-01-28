import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function EEE() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-eee">
            <h1 className="dept-title">⚡ Electrical & Electronics</h1>

            <div className="dept-tabs">
                {["About", "Infrastructure", "Career", "Contact"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${active === tab ? "active" : ""}`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

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

function About() {
    return (
        <div className="glass-card spark about-animate">
            <p>The Department of Electrical and Electronics Engineering prepares students for careers in power systems, electronics, and control technologies.</p>
            <p>The curriculum emphasizes practical learning and research in renewable energy and smart grid technologies.</p>
            <p>Experienced faculty and modern laboratory facilities support a comprehensive education.</p>
            <p className="glow-txt">⚡ Powering the future through advanced electrical and electronics engineering.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/eee1.jpg.jpeg", "/images/be/eee2.jpg.jpeg", "/images/be/eee3.jpg.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} alt="EEE Infrastructure" className="infra-slide-img" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Power Systems Engineer", icon: "🔌" },
        { title: "Control Systems Engineer", icon: "⚙️" },
        { title: "Renewable Energy Specialist", icon: "🌱" },
        { title: "Electronics Design Engineer", icon: "💡" },
    ];
    return (
        <div className="glass-card career-section">
            <h2 className="career-heading">Career Opportunities</h2>
            <div className="career-grid">
                {careers.map((career, index) => (
                    <div key={career.title} className="career-card" style={{ animationDelay: `${index * 0.12}s` }}>
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
            <p>📧 eee@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
