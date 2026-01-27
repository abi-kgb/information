import DepartmentLayout from "../../components/DepartmentLayout.jsx";

export default function MECSE() {
  return (
    <DepartmentLayout
      title="M.E – Computer Science Engineering"
      theme="theme-me"
      sections={{
        About: {
          title: "About M.E CSE",
          content:
            "The M.E CSE program emphasizes advanced computing, artificial intelligence, data science, and cloud technologies.",
        },

        Infrastructure: {
          title: "Infrastructure",
          content:
            "High-performance computing labs, AI research facilities, cloud platforms, and modern software tools.",
        },

        "Career Opportunities": {
          title: "Career Opportunities",
          custom: (
            <div className="career-grid">
              {[
                { role: "Software Architect", salary: "₹6 – 12+ LPA", icon: "💻" },
                { role: "AI Engineer", salary: "₹7 – 15+ LPA", icon: "🤖" },
                { role: "Data Scientist", salary: "₹6 – 14+ LPA", icon: "📈" },
                { role: "Cloud Engineer", salary: "₹5 – 12+ LPA", icon: "☁️" },
              ].map((item, i) => (
                <div key={item.role} className="career-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="career-icon">{item.icon}</div>
                  <h3>{item.role}</h3>
                  <span>{item.salary}</span>
                </div>
              ))}
            </div>
          ),
        },

        Contact: {
          title: "Contact",
          content: "Email: me.cse@college.edu",
        },
      }}
    />
  );
}
