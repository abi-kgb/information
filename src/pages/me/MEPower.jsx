import DepartmentLayout from "../../components/DepartmentLayout.jsx";

export default function MEDesign() {
  return (
    <DepartmentLayout
      title="M.E – Engineering Design"
      theme="theme-me"
      sections={{
        About: {
          title: "About Engineering Design",
          content:
            "This specialization focuses on product design, CAD/CAE tools, and innovative mechanical system development.",
        },

        Infrastructure: {
          title: "Infrastructure",
          content:
            "CAD/CAE labs, simulation software, prototyping tools, and advanced design studios.",
        },

        "Career Opportunities": {
          title: "Career Opportunities",
          custom: (
            <div className="career-grid">
              {[
                { role: "Design Engineer", salary: "₹4 – 8+ LPA", icon: "📐" },
                { role: "Product Designer", salary: "₹5 – 10+ LPA", icon: "🎨" },
                { role: "CAE Analyst", salary: "₹5 – 9+ LPA", icon: "📊" },
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
          content: "Email: me.design@college.edu",
        },
      }}
    />
  );
}
