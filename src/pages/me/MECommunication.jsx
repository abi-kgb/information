import DepartmentLayout from "../../components/DepartmentLayout.jsx";

export default function MECommunication() {
  return (
    <DepartmentLayout
      title="M.E – Communication Systems"
      theme="theme-me"
      sections={{
        About: {
          title: "About M.E Communication Systems",
          content:
            "The M.E Communication Systems program focuses on advanced communication technologies, signal processing, and wireless networks.",
        },

        Infrastructure: {
          title: "Infrastructure",
          content:
            "The department has advanced communication labs, DSP processors, simulation tools, and research facilities.",
        },

        "Career Opportunities": {
          title: "Career Opportunities",
          custom: (
            <div className="career-grid">
              {[
                { role: "RF Engineer", salary: "₹4 – 8+ LPA", icon: "📡" },
                { role: "Network Engineer", salary: "₹4 – 7+ LPA", icon: "🌐" },
                { role: "Signal Processing Engineer", salary: "₹5 – 10+ LPA", icon: "📊" },
                { role: "Embedded Engineer", salary: "₹4 – 9+ LPA", icon: "🔌" },
              ].map((item, i) => (
                <div
                  key={item.role}
                  className="career-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
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
          content: "Email: me.communication@college.edu",
        },
      }}
    />
  );
}
