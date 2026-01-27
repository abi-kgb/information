import DepartmentLayout from "../../components/DepartmentLayout.jsx";

export default function MEPower() {
  return (
    <DepartmentLayout
      title="M.E – Power Systems Engineering"
      theme="theme-me"
      sections={{
        About: {
          title: "About Power Systems",
          content:
            "This program focuses on power generation, transmission, smart grids, and renewable energy systems.",
        },

        Infrastructure: {
          title: "Infrastructure",
          content:
            "Power electronics labs, smart grid simulators, renewable energy research units.",
        },

        "Career Opportunities": {
          title: "Career Opportunities",
          custom: (
            <div className="career-grid">
              {[
                { role: "Power Engineer", salary: "₹4 – 9+ LPA", icon: "⚡" },
                { role: "Energy Analyst", salary: "₹5 – 10+ LPA", icon: "🔋" },
                { role: "Grid Engineer", salary: "₹6 – 12+ LPA", icon: "🏗️" },
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
          content: "Email: me.power@college.edu",
        },
      }}
    />
  );
}
