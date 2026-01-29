import { useNavigate } from "react-router-dom";
import "./BEcourses.css";
import "./Menu.css";

const courses = [
    { title: "Ph.D. Computer Science", path: "/phd/cse", icon: "💻" },
    { title: "Ph.D. ECE", path: "/phd/ece", icon: "📡" },
    { title: "Ph.D. Mechanical Engineering", path: "/phd/mechanical", icon: "⚙️" },
    { title: "Ph.D. Chemistry", path: "/phd/chemistry", icon: "🧪" },
    { title: "Ph.D. Physics", path: "/phd/physics", icon: "⚛️" },
];

export default function PhdCourses() {
    const navigate = useNavigate();

    const handleClick = (e, path) => {
        const card = e.currentTarget;
        card.classList.add("card-glow");
        setTimeout(() => {
            card.classList.remove("card-glow");
            navigate(path);
        }, 300);
    };

    return (
        <div className="full-screen">
            <div className="be-wrapper">
                <h1 className="be-heading animate-heading">Ph.D. Programs</h1>

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
