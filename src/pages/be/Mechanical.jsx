import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function Mechanical() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-mech">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/mech.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">🛠️ Mechanical Engineering</h1>

            <div className="dept-tabs" role="tablist" aria-label="Mechanical sections">
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

            <div className="dept-content">
                {active === "About" && <About />}
                {active === "Infrastructure" && <Infrastructure />}
                {active === "Career" && <Career />}
                {active === "Contact" && <Contact />}
            </div>

            {/* 🔵 NAVIGATION BAR */}
            <div className="me-nav-controls">
                <button className="me-nav-btn" onClick={() => navigate(-1)}>
                    <img src="/images/back.gif" alt="Back" />
                </button>
                <button className="me-nav-btn ford-btn" onClick={() => navigate(1)}>
                    <img src="/images/ford.gif" alt="Forward" />
                </button>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="glass-card spark about-animate">
            <p>The Department of Mechanical Engineering, established in 1991, offers B.E. Mechanical Engineering with an intake of 60 students and M.E. Applied Electronics with an intake of 18 students.</p>
            <p>Highly qualified and experienced faculty members with specializations in Thermal Engineering, Computer Aided Design, and Energy Engineering support student learning.</p>
            <p>The department features state-of-the-art laboratory facilities and focuses on research and academic excellence.</p>
            <p className="glow-txt">⚙️ Engineering a better world through mechanical innovation.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/19.jpeg", "/images/be/20.jpeg", "/images/be/WhatsApp Image 2026-01-28 at 3.10.11 PM.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} alt="Mechanical Infrastructure" className="infra-slide-img" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Design Engineer", salary: "₹ 5 - 10 LPA", icon: "📐" },
        { title: "Thermal Engineer", salary: "₹ 5 - 9 LPA", icon: "🔥" },
        { title: "Automotive Engineer", salary: "₹ 6 - 12 LPA", icon: "🚗" },
        { title: "Manufacturing Engineer", salary: "₹ 4 - 8 LPA", icon: "🏭" },
    ];
    return (
        <div className="glass-card career-section">
            <h2 className="career-heading">Career Opportunities</h2>
            <div className="career-grid">
                {careers.map((career, index) => (
                    <div key={career.title} className="career-card" style={{ animationDelay: `${index * 0.12}s` }}>
                        <span className="career-icon">{career.icon}</span>
                        <p>{career.title}</p>
                        <p className="career-salary">{career.salary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="glass-card pop">
            <p>📧 mechanical@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
