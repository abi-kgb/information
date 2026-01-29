import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function CyberSecurity() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-cyber">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/cyber.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">🔐 CSE (Cyber Security)</h1>

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
            <p>The Department of Cyber Security, established in 2024, focuses on education and research through an innovative curriculum and hands-on training.</p>
            <p>The department is supported by highly qualified faculty and emphasizes academic excellence and industry exposure.</p>
            <p>Student-centric, project-based learning and close faculty mentoring ensure practical skill development.</p>
            <p>The curriculum aligns with NEP 2020 and Industry 5.0.</p>
            <p className="glow-txt">🔐 Securing the digital future through innovation and expertise.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/13.jpeg", "/images/be/14.jpeg", "/images/be/15.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} alt="Cyber Security Infrastructure" className="infra-slide-img" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Cyber Security Analyst", icon: "🛡️", salary: "₹5 - 10 LPA" },
        { title: "Ethical Hacker", icon: "💻", salary: "₹6 - 15 LPA" },
        { title: "Network Security Engineer", icon: "🌐", salary: "₹4 - 9 LPA" },
        { title: "Digital Forensics Expert", icon: "🔍", salary: "₹5 - 12 LPA" },
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
            <p>📧 cybersecurity@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
