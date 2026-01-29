import { useNavigate } from "react-router-dom";
import "./phddepartment.css";
import "../../components/Menu.css";

export default function Physics() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Research Frontiers",
            icon: "⚛️",
            content: "Investigating the fundamental laws of nature and matter.",
            list: ["Condensed Matter Physics", "Photonics & Optics", "Nanotechnology", "Astrophysics & Cosmology"]
        },
        {
            title: "Academic Focus",
            icon: "🔭",
            content: "Fostering deep understanding and critical thinking in physical sciences.",
            list: ["Theoretical Physics", "Experimental Techniques", "Interdisciplinary Applications", "Advanced Materials"]
        },
        {
            title: "Laboratories",
            icon: "🔬",
            content: "Well-equipped labs for cutting-edge experiments and discovery.",
            list: ["Optics & Lasers Lab", "Thin Film Technology Lab", "Material Science Lab", "Computational Physics Unit"]
        }
    ];

    return (
        <div className="interactive-container">
            <h1 className="interactive-title">Ph.D. Physics</h1>

            <div className="interactive-grid">
                {sections.map((section, index) => (
                    <div key={index} className="interactive-card" style={{ animationDelay: `${index * 0.1}s` }}>
                        <span className="card-icon">{section.icon}</span>
                        <h2 className="card-title">{section.title}</h2>
                        <p className="card-content">{section.content}</p>
                        <ul className="card-list">
                            {section.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="me-nav-controls">
                <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/phd")}>
                    <img src="/images/back.gif" alt="Back" />
                </button>
                <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
                    <img src="/images/menu.gif" alt="Menu" />
                </button>
            </div>
        </div>
    );
}
