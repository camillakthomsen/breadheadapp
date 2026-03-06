import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/Home";

import HomeBakery from "./components/bakery/bakeryhome";
import SourdoughCourse from "./components/bakery/SourdoughCourse";
import BaristaCourse from "./components/bakery/BaristaCourse";
import Location from "./components/bakery/Location";
import Events from "./components/bakery/Events";

import HomeBookclub from "./components/bookclub/bookclubhome";
import HomeFirstfloor from "./components/firstfloor/firstfloorhome";
import HomeRunning from "./components/running/runninghome";
import RunningPage from "./components/running/runningpage";
import HomeSavoury from "./components/savoury/savouryhome";



function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homebakery" element={<HomeBakery/>} />
          <Route path="/sourdough-course" element={<SourdoughCourse />} />
          <Route path="/barista-course" element={<BaristaCourse />} />
          <Route path="/location" element={<Location />} />
          <Route path="/events" element={<Events />} />

          <Route path="/homebookclub" element={<HomeBookclub/>} />
          <Route path="/homefirstfloor" element={<HomeFirstfloor/>} />

          <Route path="/homerunning" element={<HomeRunning/>} />
          <Route path="/runningpage" element={<RunningPage/>} />

          <Route path="/homesavoury" element={<HomeSavoury/>} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
