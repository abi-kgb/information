import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function ECE() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-ece">
            <h1 className="dept-title">📡 Electronics & Communication</h1>

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
            <p>The Department of Electronics & Communication Engineering focuses on the design and application of electronic systems and communication technologies.</p>
            <p>The curriculum covers communication systems, signal processing, VLSI design, and IoT technologies.</p>
            <p>Well-equipped laboratories and experienced faculty ensure strong practical exposure.</p>
            <p className="glow-txt">📡 Connecting innovation through advanced electronics and communication.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/16.jpeg", "/images/be/17.jpeg", "/images/be/18.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} alt="ECE Infrastructure" className="infra-slide-img" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Electronics Engineer", icon: "🔧" },
        { title: "Communication Engineer", icon: "📡" },
        { title: "Embedded Systems Engineer", icon: "🧠" },
        { title: "VLSI Design Engineer", icon: "💡" },
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
            <p>📧 ece@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
