import { useNavigate } from "react-router-dom";
import "./phddepartment.css";
import "../../components/Menu.css";

export default function Ece() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Research Clusters",
            icon: "📡",
            content: "Advancing the frontiers of Electronics and Communication through specialized research.",
            list: ["Wireless Communication", "VLSI Design", "Signal & Image Processing", "IoT and Embedded Systems"]
        },
        {
            title: "Program Highlights",
            icon: "✨",
            content: "We provide an ecosystem that fosters innovation and academic rigor.",
            list: ["Industry-sponsored Projects", "International Collaborations", "Interdisciplinary Research", "Regular Seminars & Workshops"]
        },
        {
            title: "Infrastructure",
            icon: "🔌",
            content: "Equipped with advanced tools for design, simulation, and hardware testing.",
            list: ["Advanced Communication Lab", "Nano-Electronics Lab", "RF & Microwave Engineering Lab", "Embedded Systems Research Cell"]
        }
    ];

    return (
        <div className="interactive-container">
            <h1 className="interactive-title">Ph.D. Electronics & Communication</h1>

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
