import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function Civil() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-civil">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/civil.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">🏗️ Civil Engineering</h1>

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
        <div className="glass-card spark">
            <p>The Department of Civil Engineering, established in 1993, focuses on research, consultancy, and patent-oriented activities.</p>
            <p>The department emphasizes learning-oriented teaching with experienced faculty across all major civil domains.</p>
            <p>Students gain professional skills through state-of-the-art laboratories and advanced software tools like GIS, ETABS, and Revit.</p>
            <p>Research projects funded by DST, DOS, and MHRD highlight the department’s strong research competency.</p>
            <p className="glow-txt">Building sustainable infrastructure through innovation and research.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/7.jpeg", "/images/be/8.jpeg", "/images/be/9.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} className="infra-slide-img" alt="Civil Infrastructure" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Structural Engineer", salary: "₹ 4 - 9 LPA", icon: "🏗️" },
        { title: "Project Manager", salary: "₹ 6 - 12 LPA", icon: "📐" },
        { title: "Geotechnical Engineer", salary: "₹ 5 - 10 LPA", icon: "🌍" },
        { title: "Environmental Engineer", salary: "₹ 4 - 8 LPA", icon: "🌱" },
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
            <p>📧 civil@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
