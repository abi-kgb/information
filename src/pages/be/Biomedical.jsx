import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function Biomedical() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-bio">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/bio.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">🧬 Biomedical Engineering</h1>

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
            <p>
                The Department of Biomedical Engineering is an interdisciplinary
                department integrating engineering principles with human biological
                systems.
            </p>
            <p>The department emphasizes undergraduate education, innovation, and meaningful research.</p>
            <p>Well-equipped laboratories and experienced faculty support hands-on learning.</p>
            <p>Strong hospital and industry collaborations provide internships and real-time clinical training.</p>
            <p>The department maintains a placement record above 90%.</p>
            <p className="glow-txt">Shaping biomedical engineers for advanced healthcare solutions.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/4.jpeg", "/images/be/5.jpeg", "/images/be/6.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} alt="Biomedical Infrastructure" className="infra-slide-img" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Biomedical Engineer", salary: "₹ 5 - 10 LPA", icon: "🧬" },
        { title: "Clinical Engineer", salary: "₹ 4 - 8 LPA", icon: "🏥" },
        { title: "Medical Device Designer", salary: "₹ 6 - 12 LPA", icon: "⚙️" },
        { title: "Research Scientist", salary: "₹ 7 - 14 LPA", icon: "🔬" },
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
            <p>📧 biomedical@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
