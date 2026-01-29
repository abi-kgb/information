import { useNavigate } from "react-router-dom";
import "./phddepartment.css";
import "../../components/Menu.css";

export default function ComputerScience() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Research Domains",
            icon: "💻",
            content: "Pushing the boundaries of computing with advanced research in emerging technologies.",
            list: ["Artificial Intelligence & ML", "Cyber Security & Forensics", "Cloud & Edge Computing", "Data Science & Big Data"]
        },
        {
            title: "Admission Criteria",
            icon: "📝",
            content: "We look for candidates with a strong technical background and a passion for innovation.",
            list: ["M.E. / M.Tech. in CSE / IT", "Strong Analytical Skills", "Research Publications (Preferred)", "Entrance Test & Interview"]
        },
        {
            title: "Research Facilities",
            icon: "🖥️",
            content: "State-of-the-art labs designed to support high-performance computing and research.",
            list: ["AI & Deep Learning Lab", "Cyber Defense Center", "IoT Innovation Hub", "Cloud Computing Data Center"]
        }
    ];

    return (
        <div className="interactive-container">
            <h1 className="interactive-title">Ph.D. Computer Science</h1>

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
