import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomeSlider from "./components/HomeSlider";
import MenuPage from "./components/MenuPage";
import MEMenu from "./components/MEMenu.jsx";
import McaPage from "./pages/McaPage.jsx";
import MbaPage from "./pages/MbaPage.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import Placement from "./pages/Placement.jsx";
import Sports from "./pages/Sports.jsx";
import Hostel from "./pages/Hostel.jsx";
import MECommunication from "./pages/me/MECommunication";
import MECSE from "./pages/me/MECSE";
import MEDesign from "./pages/me/MEDesign";
import Transport from "./pages/Transport";
import BTech from "./components/BTech.jsx";
import MEPower from "./pages/me/MEPower";
import MEStructural from "./pages/me/MEStructural";
import AI_DS from "./pages/btech/AI_DS.jsx";
import Biotechnology from "./pages/btech/Biotechnology.jsx";
import ChemicalEngineering from "./pages/btech/ChemicalEngineering.jsx";
import IT from "./pages/btech/IT.jsx";
import CSBS from "./pages/btech/CSBS.jsx";

// BE COURSES
import BEcourses from "./components/BEcourses.jsx";
import Aeronautical from "./pages/be/Aeronautical.jsx";
import Biomedical from "./pages/be/Biomedical.jsx";
import Civil from "./pages/be/Civil.jsx";
import ComputerScience from "./pages/be/ComputerScience.jsx";
import CyberSecurity from "./pages/be/CyberSecurity.jsx";
import AIML from "./pages/be/AIML.jsx";
import ECE from "./pages/be/ECE.jsx";
import EEE from "./pages/be/EEE.jsx";
import Mechanical from "./pages/be/Mechanical.jsx";

// PhD COURSES
import PhdCourses from "./components/PhdCourses.jsx";
import PhdMechanical from "./pages/phd/Mechanical.jsx";
import PhdEce from "./pages/phd/Ece.jsx";
import PhdChemistry from "./pages/phd/InteractiveCardsChemistry.jsx";
import PhdPysics from "./pages/phd/Physics.jsx";
import PhdCSE from "./pages/phd/ComputerScience.jsx";

export default function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<HomeSlider />} />

      {/* MENU */}
      <Route path="/menu" element={<MenuPage />} />

      {/* DEPARTMENTS */}
      <Route path="/mca" element={<McaPage />} />
      <Route path="/mba" element={<MbaPage />} />
      <Route path="/scholarship" element={<Scholarships />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/me-menu" element={<MEMenu />} />
      <Route path="/hostel" element={<Hostel />} />
      <Route path="/btech" element={<BTech />} />
      <Route path="/me/communication" element={<MECommunication />} />
      <Route path="/me/cse" element={<MECSE />} />
      <Route path="/transport" element={<Transport />} />

      <Route path="/me/design" element={<MEDesign />} />
      <Route path="/me/power" element={<MEPower />} />
      <Route path="/me/structural" element={<MEStructural />} />
      <Route path="/about" element={<About />} />
      <Route path="/ai-ds" element={<AI_DS />} />
      <Route path="/btech/aids" element={<AI_DS />} />
      <Route path="/btech/biotech" element={<Biotechnology />} />
      <Route path="/btech/chem" element={<ChemicalEngineering />} />
      <Route path="/btech/it" element={<IT />} />
      <Route path="/btech/csb" element={<CSBS />} />

      {/* BE COURSES ROUTES */}
      <Route path="/be" element={<BEcourses />} />
      <Route path="/be/aeronautical" element={<Aeronautical />} />
      <Route path="/be/biomedical" element={<Biomedical />} />
      <Route path="/be/civil" element={<Civil />} />
      <Route path="/be/cse" element={<ComputerScience />} />
      <Route path="/be/cyber" element={<CyberSecurity />} />
      <Route path="/be/aiml" element={<AIML />} />
      <Route path="/be/ece" element={<ECE />} />
      <Route path="/be/eee" element={<EEE />} />
      <Route path="/be/mechanical" element={<Mechanical />} />

      {/* PhD ROUTES */}
      <Route path="/phd" element={<PhdCourses />} />
      <Route path="/phd/mechanical" element={<PhdMechanical />} />
      <Route path="/phd/ece" element={<PhdEce />} />
      <Route path="/phd/chemistry" element={<PhdChemistry />} />
      <Route path="/phd/physics" element={<PhdPysics />} />
      <Route path="/phd/cse" element={<PhdCSE />} />

    </Routes>
  );
}
