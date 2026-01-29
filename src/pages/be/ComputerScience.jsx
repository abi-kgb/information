import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function ComputerScience() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-cse">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/comp.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">💻 Computer Science & Engineering</h1>

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
            <p>The Department of Computer Science and Engineering was established in 1991 and offers B.E. CSE with an intake of 180 students and M.E. CSE with an intake of 12 students.</p>
            <p>The department focuses on producing highly skilled professionals through strong academic foundations and modern computing laboratories.</p>
            <p>Regular guest lectures and industry programs are conducted through professional bodies like CSI and ISTE.</p>
            <p>The department has an excellent placement record, with nearly 90% of students placed in reputed MNCs.</p>
            <p className="glow-txt">Empowering future-ready computing professionals through innovation and excellence.</p>
        </div>
    );
}

function Infrastructure() {
    const images = ["/images/be/10.jpeg", "/images/be/11.jpeg", "/images/be/12.jpeg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="glass-card rise">
            <img src={images[current]} className="infra-slide-img" alt="CSE Infrastructure" />
        </div>
    );
}

function Career() {
    const careers = [
        { title: "Software Developer", salary: "₹ 6 - 15 LPA", icon: "💻" },
        { title: "Data Scientist", salary: "₹ 7 - 16 LPA", icon: "📊" },
        { title: "AI / ML Engineer", salary: "₹ 8 - 18 LPA", icon: "🤖" },
        { title: "Cyber Security Analyst", salary: "₹ 6 - 14 LPA", icon: "🔐" },
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
            <p>📧 cse@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
