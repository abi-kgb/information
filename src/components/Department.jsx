import React, { useState } from "react";
import "./Department.css";

import InteractiveCards from "./InteractiveCards";
import InteractiveCardsChemistry from "./InteractiveCardsChemistry";
import ComputerScinceEngineering from "./ComputerScinceEngineering";
import Ece from "./Ece";
import Mechanical from "./Mechanical";
import Mca from "./mca";

export default function Department() {
  const [openDept, setOpenDept] = useState(null);

  return (
    <div className="dept-wrapper">
      {/* DIAMOND MENU */}
      {!openDept && (
        <div className="diamond-container">
          <div className="diamond physics" onClick={() => setOpenDept("physics")}>
            <span>PhD Physics</span>
          </div>

          <div className="diamond chemistry" onClick={() => setOpenDept("chemistry")}>
            <span>PhD Chemistry</span>
          </div>

          <div className="diamond computer" onClick={() => setOpenDept("computer")}>
            <span>Computer Science</span>
          </div>

          <div className="diamond ece" onClick={() => setOpenDept("ece")}>
            <span>ECE</span>
          </div>

          <div className="diamond mechanical" onClick={() => setOpenDept("mechanical")}>
            <span>Mechanical</span>
          </div>

          <div className="diamond mca" onClick={() => setOpenDept("mca")}>
            <span>MCA</span>
          </div>
        </div>
      )}

      {/* POPUP CONTENT */}
      {openDept && (
        <div className="popup-content">
          {openDept === "physics" && <InteractiveCards />}
          {openDept === "chemistry" && <InteractiveCardsChemistry />}
          {openDept === "computer" && <ComputerScinceEngineering />}
          {openDept === "ece" && <Ece />}
          {openDept === "mechanical" && <Mechanical />}
          {openDept === "mca" && <Mca />}
        </div>
      )}
    </div>
  );
}
