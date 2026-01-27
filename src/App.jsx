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

import MEPower from "./pages/me/MEPower";
import MEStructural from "./pages/me/MEStructural";
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
      <Route path="/me/communication" element={<MECommunication />} />
<Route path="/me/cse" element={<MECSE />} />
<Route path="/transport" element={<Transport />} />

<Route path="/me/design" element={<MEDesign />} />
<Route path="/me/power" element={<MEPower />} />
<Route path="/me/structural" element={<MEStructural />} />
<Route path="/about" element={<About />} />

    </Routes>
  );
}
