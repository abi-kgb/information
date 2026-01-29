import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bedepartment.css";
import "../../components/Menu.css";

export default function AIML() {
    const [active, setActive] = useState("About");
    const navigate = useNavigate();

    return (
        <div className="dept-page bg-aiml">
            {/* 🎥 VIDEO BACKGROUND */}
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/media/ai.mp4" type="video/mp4" />
            </video>

            {/* 🌑 DARK OVERLAY */}
            <div className="video-overlay"></div>

            <h1 className="dept-title">🤖 CSE (AI {"&"} ML)</h1>

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
            <p>The Department of Artificial Intelligence and Machine Learning, established in 2025, is dedicated to developing future innovators in AI and ML.</p>
            <p>The curriculum is aligned with current industry needs and prepares graduates for careers in domains such as healthcare and autonomous systems.</p>
            <p>The department promotes innovation, interdisciplinary learning, and ethical AI practices.</p>
            <p className="glow-txt">Shaping responsible AI professionals for an intelligent future.</p>
        </div>
    );
}

function Infrastructure() {
    return (
        <div className="glass-card rise">
            <div className="infra-grid-custom">
                <img src="/images/be/1.jpeg" alt="AI & ML Laboratory" />
                <img src="/images/be/2.jpeg" alt="Data Science Lab" />
                <div className="infra-video-span infra-bottom">
                    <iframe src="https://www.youtube.com/embed/aircAruvnKk" title="AIML Infrastructure" allowFullScreen></iframe>
                </div>
                <img src="/images/be/3.jpeg" alt="Robotics Lab" />
            </div>
        </div>
    );
}

function Career() {
    const careers = [
        { title: "AI / ML Engineer", salary: "₹ 8 - 18 LPA", icon: "🤖" },
        { title: "Data Scientist", salary: "₹ 7 - 16 LPA", icon: "📊" },
        { title: "Computer Vision Engineer", salary: "₹ 7 - 15 LPA", icon: "👁️" },
        { title: "AI Research Engineer", salary: "₹ 9 - 20 LPA", icon: "🧠" },
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
            <p>📧 aiml@college.edu</p>
            <p>📞 +91 9XXXXXXXXX</p>
        </div>
    );
}
