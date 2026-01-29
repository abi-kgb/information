import React, { useState, useEffect } from "react";
import "./InteractiveCards.css";
import lab1 from "./bg4.webp";
import lab2 from "./bg1.webp";
import bgImage from "./phd1.jfif";
const data = [
  {
    id: "about",
    title: "About Us",
    content: `
In our Physics Department, we take immense pride in cultivating a vibrant and intellectually stimulating learning environment that transcends traditional boundaries. With a strong focus on interdisciplinary subjects for first-year engineering students, we aim to build a solid foundation that supports both academic excellence and innovative thinking.

We firmly believe in the philosophy of learning by doing. To support this, the department is equipped with state-of-the-art engineering physics laboratories that are readily accessible to all first-year B.E. and B.Tech students. These facilities enable students to transform theoretical concepts into hands-on experience.

Through practical laboratory sessions, students develop strong analytical and experimental skills while gaining a deeper understanding of fundamental physical principles. Real-world applications of physics concepts help bridge the gap between classroom learning and practical implementation.

The backbone of our department’s success is our team of highly qualified, experienced, and dedicated faculty members. They are deeply committed to nurturing young minds, encouraging curiosity, and guiding students toward achieving their academic and research goals through continuous mentorship and personalized attention.

Additionally, our department houses two well-established laboratories equipped with advanced instruments and modern technology. These labs provide an ideal environment for exploration, experimentation, and research, empowering students to expand their knowledge boundaries and actively participate in innovative scientific pursuits.
`,

    color: "blue",
  },
  {
    id: "career",
    title: "Career Development",
    content: "Career guidance, placements, and industry exposure.",
    color: "green"
  },
  {
    id: "infra",
    title: "Infrastructure",
    color: "purple",
    content: [lab1, lab2],
  },
  {
    id: "contact",
    title: "Contact Us",
    color: "orange",
    content: {
      address: {
        college: "Adhiyamaan College of Engineering",
        lines: [
          "Dr.M.G.R. Nagar, Hosur",
          "Krishnagiri District, Tamil Nadu",
          "India. Pin: 635 130"
        ],
        website: "http://www.adhiyamaan.ac.in"
      },
      email: [
        { label: "Principal", value: "principal@adhiyamaan.ac.in" },
        { label: "Controller of Examination", value: "coe@adhiyamaan.ac.in" },
        { label: "Dean (Academic)", value: "deanacademic@adhiyamaan.ac.in" }
      ],
      phone: [
        { label: "Reception", value: "(04344) 260570" },
        { label: "Administrative Office", value: "(04344) 261002" },
        { label: "Accounts Office", value: "(04344) 261001 / 261034" },
        { label: "Principal Office", value: "(04344) 261020" }
      ]
    }
  }
];

export default function InteractiveCards() {
  const [phase, setPhase] = useState("entry");
  const [active, setActive] = useState(null);
  const [blast, setBlast] = useState(false);
  const [infraIndex, setInfraIndex] = useState(0);

  // ✅ MOVE THIS UP
  const activeData = data.find((d) => d.id === active);

  useEffect(() => {
    setTimeout(() => setPhase("entry"), 3500);
    setTimeout(() => setPhase("grid"), 4300);
  }, []);
  useEffect(() => {
    if (active === "infra" && activeData?.content?.length > 1) {
      const interval = setInterval(() => {
        setInfraIndex((prev) =>
          (prev + 1) % activeData.content.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [active, activeData]);


  // Step 2: cards animate to grid


  const handleClick = (id) => {
    setActive(id);
    setPhase("stack");
    setBlast(true);
    setTimeout(() => setBlast(false), 900);
  };


  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* MAIN HEADING */}
      {/* MAIN HEADING */}
      {/* MAIN HEADING */}
      <div className={`main-heading ${phase !== "entry" ? "fixed" : ""}`}>
        <span className="phd">Physics Department</span>
      </div>



      {blast && (
        <div className="cracker-drop">
          <div className="cracker-core">
            {[...Array(12)].map((_, i) => (
              <span key={i} className={`wrapper piece-${i}`} />
            ))}
          </div>
        </div>
      )}

      {active && !blast && (
        <div className="center-content">
          {active === "contact" ? (
            <div className="contact-section">
              <div className="contact-card">
                <div className="icon-circle">📍</div>
                <h3>CONTACT ADDRESS</h3>
                <p className="highlight">
                  {activeData.content.address.college}
                </p>
                {activeData.content.address.lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
                <p className="highlight">Website Address</p>
                <p>{activeData.content.address.website}</p>
              </div>

              <div className="contact-card">
                <div className="icon-circle">✉️</div>
                <h3>EMAIL US</h3>
                {activeData.content.email.map((e, i) => (
                  <div key={i}>
                    <p className="highlight">{e.label}</p>
                    <p>{e.value}</p>
                  </div>
                ))}
              </div>

              <div className="contact-card">
                <div className="icon-circle">☎️</div>
                <h3>CALL US</h3>
                {activeData.content.phone.map((p, i) => (
                  <div key={i}>
                    <p className="highlight">{p.label}</p>
                    <p>{p.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : active === "career" ? (
            <div className="career-wrapper">
              <h2>PhD Career Opportunities</h2>

              <div className="career-grid">
                <div className="career-card">
                  <span>🎓</span>
                  <h4>University Professor</h4>
                  <p>Academia & Teaching</p>
                </div>

                <div className="career-card">
                  <span>🧪</span>
                  <h4>Research Scientist</h4>
                  <p>ISRO, DRDO, BARC, CSIR</p>
                </div>

                <div className="career-card">
                  <span>🌍</span>
                  <h4>Post-Doctoral Fellow</h4>
                  <p>Global Research Labs</p>
                </div>

                <div className="career-card">
                  <span>⚙️</span>
                  <h4>R&D Engineer</h4>
                  <p>Industry & Innovation</p>
                </div>

                <div className="career-card">
                  <span>📊</span>
                  <h4>Data / Computational Physicist</h4>
                  <p>AI, Modeling, Simulations</p>
                </div>

                <div className="career-card">
                  <span>📄</span>
                  <h4>Scientific Consultant</h4>
                  <p>Policy & Research Advisory</p>
                </div>
              </div>
            </div>
          ) : active === "about" ? (
            <div className="about-pinterest">
              {activeData.content.split("\n\n").map((para, i) => (
                <div key={i} className="about-card">
                  <p>{para}</p>
                </div>
              ))}
            </div>
          ) : active === "infra" ? (
            <div className="infra-grid-wrapper">
              <img
                key={infraIndex}   // ✅ forces re-render
                src={activeData.content[infraIndex]}
                alt="Infrastructure"
                className="infra-slide-image"
              />
            </div>
          )
            :
            (
              <>

                <p>{activeData.content}</p>
              </>
            )
          }
        </div>
      )}

      {phase !== "entry" &&
        data.map((card, index) => {


          return (
            <div
              key={card.id}
              className={`card ${card.color} card-${index} ${phase}`}
              onClick={() => handleClick(card.id)}
            >
              {card.title}
            </div>
          );
        })}
    </div>
  );
}
