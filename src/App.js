import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import SourdoughCourse from "./components/SourdoughCourse";
import BaristaCourse from "./components/BaristaCourse";
import Location from "./components/Location";
import Events from "./components/Events";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sourdough-course" element={<SourdoughCourse />} />
          <Route path="/barista-course" element={<BaristaCourse />} />
          <Route path="/location" element={<Location />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
