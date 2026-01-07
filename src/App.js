import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Club from './components/Clubs/Club';
import About from './components/About';
import Calendar from './components/Calendar';
import Units from './components/Unit/Units';
import Nss from './components/Unit/Nss';
import Home from "./components/Home";
import PromptTechies from "./components/Clubs/PromptTechies";
import Hsga from "./components/Unit/Hsga";

import AllEvents from "./components/Events/AllEvents";
import Cultural from "./components/Events/Cultural";
import Technical from "./components/Events/Tech";
import Unit from "./components/Events/Unit";
import OtherClg from "./components/Events/OtherClgs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/clubs" element={<Club />} />
        <Route path="/clubs/promptTechies" element={<PromptTechies />} />

        <Route path="/units" element={<Units />} />
        <Route path="/units/Nss" element={<Nss/>} />
        <Route path="/units/Hsga" element={<Hsga/>} />

        <Route path="/Events/AllEvents" element={<AllEvents />} />
        <Route path="/Events/Cultural" element={<Cultural />} />
        <Route path="/Events/Technical" element={<Technical />} />
        <Route path="/Events/Units" element={<Unit />} />
        <Route path="/Events/OtherClg" element={<OtherClg />} />

        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        
      </Routes>


    </BrowserRouter>
  );
}

export default App;
