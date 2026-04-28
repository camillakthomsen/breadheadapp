import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import Home from "./components/Home";

import HomeBakery from "./components/bakery/bakeryhome";
import BakeryInfo from "./components/bakery/bakeryinfo";
import SourdoughCourse from "./components/bakery/SourdoughCourse";
import BaristaCourse from "./components/bakery/BaristaCourse";
import Location from "./components/bakery/Location";
import Events from "./components/bakery/Events";
import Bakery2Business from "./components/bakery/bakery2business";

import HomeBookclub from "./components/bookclub/bookclubhome";
import BookclubInfo from "./components/bookclub/bookclubinfo";

import HomeFirstfloor from "./components/firstfloor/firstfloorhome";
import FirstfloorInfo from "./components/firstfloor/firstfloorinfo";

import HomeRunning from "./components/running/runninghome";
import RunningInfo from "./components/running/runninginfo";

import JobsHome from "./components/job/jobhome";
import JobsInfo from "./components/job/jobinfo";



function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homebakery" element={<HomeBakery/>} />
          <Route path="/bakeryinfo" element={<BakeryInfo/>} />
          <Route path="/sourdough-course" element={<SourdoughCourse />} />
          <Route path="/barista-course" element={<BaristaCourse />} />
          <Route path="/location" element={<Location />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bakery2business" element={<Bakery2Business />} />

          <Route path="/homebookclub" element={<HomeBookclub/>} />
          <Route path="/bookclubinfo" element={<BookclubInfo/>} />

          <Route path="/homefirstfloor" element={<HomeFirstfloor/>} />
          <Route path="/firstfloorinfo" element={<FirstfloorInfo/>} />

          <Route path="/homerunning" element={<HomeRunning/>} />
          <Route path="/runninginfo" element={<RunningInfo/>} />

          <Route path="/jobhome" element={<JobsHome/>} />
          <Route path="/jobinfo" element={<JobsInfo/>} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer/>

      <CookieConsent
        location="bottom"
        buttonText="OK"
        declineButtonText="NEJ TAK"
        enableDeclineButton
        style={{
        background: "#e9e9e9",
        color: "#111",
        fontFamily: "FoundersRegular"
      }}
        buttonStyle={{
        background: "#111",
        color: "#fff",
        fontSize: "12px",
        textTransform: "uppercase"
      }}
        declineButtonStyle={{
        background: "transparent",
        color: "#111",
        fontSize: "12px",
        textTransform: "uppercase"
      }}
      >
          Denne side bruger cookies til statistik.
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;
