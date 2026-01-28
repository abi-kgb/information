import { useNavigate } from "react-router-dom";
import "./BEcourses.css";
import "./Menu.css";

const courses = [
    { title: "Aeronautical Engineering", path: "/be/aeronautical", icon: "✈️" },
    { title: "Biomedical Engineering", path: "/be/biomedical", icon: "🧬" },
    { title: "Civil Engineering", path: "/be/civil", icon: "🏗️" },
    { title: "Computer Science & Engineering", path: "/be/cse", icon: "💻" },
    { title: "CSE (Cyber Security)", path: "/be/cyber", icon: "🔐" },
    { title: "CSE (AI & ML)", path: "/be/aiml", icon: "🤖" },
    { title: "Electronics & Communication", path: "/be/ece", icon: "📡" },
    { title: "Electrical & Electronics", path: "/be/eee", icon: "⚡" },
    { title: "Mechanical Engineering", path: "/be/mechanical", icon: "⚙️" },
];

export default function BEcourses() {
    const navigate = useNavigate();

    const handleClick = (e, path) => {
        e.currentTarget.classList.add("card-glow");
        setTimeout(() => navigate(path), 250);
    };

    return (
        <div className="full-screen">
            <div className="be-wrapper">
                <h1 className="be-heading animate-heading">BE Courses</h1>

                <div className="be-grid">
                    {courses.map((course, index) => (
                        <div
                            key={course.title}
                            className="be-card"
                            style={{ animationDelay: `${index * 0.12}s` }}
                            onClick={(e) => handleClick(e, course.path)}
                        >
                            <div className="be-icon">{course.icon}</div>
                            <h3>{course.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔵 NAVIGATION BAR */}
            <div className="me-nav-controls">
                <button className="me-nav-btn menu-nav-btn" onClick={() => navigate("/menu")}>
                    <img src="/images/menu.gif" alt="Menu" />
                </button>
            </div>
        </div>
    );
}
