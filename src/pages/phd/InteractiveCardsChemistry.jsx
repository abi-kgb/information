import { useNavigate } from "react-router-dom";
import "./phddepartment.css";
import "../../components/Menu.css";

export default function InteractiveCardsChemistry() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Research Verticals",
            icon: "🧪",
            content: "Exploring the fundamentals and applications of chemical sciences.",
            list: ["Organic Synthesis", "Nanoscale Materials", "Environmental Chemistry", "Polymer & Analytical Chemistry"]
        },
        {
            title: "Scholarly Environment",
            icon: "📚",
            content: "Dedicated to creating a strong foundation for future research leaders.",
            list: ["High-impact Publications", "Research Fellowships", "Collaborative Grants", "State-of-the-art Instrumentation"]
        },
        {
            title: "Lab Facilities",
            icon: "🔬",
            content: "Equipped with modern analytical tools for advanced chemical research.",
            list: ["Spectroscopy Unit", "Material Characterization Lab", "Computational Chemistry Center", "Green Chemistry Research Lab"]
        }
    ];

    return (
        <div className="interactive-container">
            <h1 className="interactive-title">Ph.D. Chemistry</h1>

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
