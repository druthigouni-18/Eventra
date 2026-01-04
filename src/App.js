import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Club from './components/Clubs/Club';
import About from './components/About';
import Units from './components/Unit/Units';
import Nss from './components/Unit/Nss';
import Home from "./components/Home";
import PromptTechies from "./components/Clubs/PromptTechies";
import Hsga from "./components/Unit/Hsga";
import AllEvents from './components/Events/AllEvents';

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

        <Route path="/about" element={<About />} />
        
      </Routes>


    </BrowserRouter>
  );
}

export default App;
