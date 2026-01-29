import { useNavigate } from "react-router-dom";
import "./phddepartment.css";
import "../../components/Menu.css";

export default function Mechanical() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Research Areas",
            icon: "🔬",
            content: "The PhD program in Mechanical Engineering focuses on cutting-edge research in diverse fields.",
            list: ["Thermal Engineering", "Advanced Manufacturing", "Robotics and Automation", "Sustainable Energy"]
        },
        {
            title: "Eligibility",
            icon: "🎓",
            content: "Candidates seeking admission to the PhD program must meet the following criteria:",
            list: ["Master's degree in relevant field", "Minimum 55% aggregate marks", "Valid GATE score preferred", "Entrance examination performance"]
        },
        {
            title: "Facilities",
            icon: "🏢",
            content: "Our research scholars have access to world-class laboratories and computing resources.",
            list: ["Precision Engineering Lab", "Renewable Energy Research Center", "CNC Research Lab", "Simulation & Analysis Suite"]
        }
    ];

    return (
        <div className="interactive-container">
            <h1 className="interactive-title">Ph.D. Mechanical Engineering</h1>

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
