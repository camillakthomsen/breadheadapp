import "../../style/events.css";
import { NavLink } from "react-router-dom";

import runImg from "../../photo/Løbeklub eventside.png";
import runImg2 from "../../photo/Løbeklub eventside-1.png";
import pilatesImg from "../../photo/pilates eventside.png";
import sourdoughImg from "../../photo/surdejskursus eventside.png";
import baristaImg from "../../photo/baristakursus eventside.png";

export default function Events() {
  const events = [
    {
    image: runImg,
    to: "/runninginfo",
    },
    {
    image: runImg2,
    to: "/runninginfo",
    },
    {
    image: pilatesImg,
    to: "/",
    },
    { 
    image: baristaImg,
    to: "/barista-course",
    },
    {
    image: sourdoughImg,
    to: "/sourdough-course",
    },
  ];


  return (
  <div className="eventsPage">
    <br />
    <br />
    <br />

    <h1 className="infoHero">EVENTS</h1>

    {/* TEXT BEFORE GRID */}
    <h2 className="infoSectionTitle">
      BREADHEAD IS MORE THAN BREAD AND COFFEE – IT’S ABOUT THE PEOPLE WHO SHOW UP
      AROUND IT.
    </h2>

    <div className="eventsGrid">
    {events.map((e, i) => (
        <NavLink key={i} to={e.to} className="eventCard">
            <img src={e.image} alt="" />
            <div className="overlay">
              READ MORE
            </div>
        </NavLink>
    ))}
</div>

    {/* TEXT AFTER GRID */}
    <h2 className="infoSectionTitle">CITYGROWN EVENTS</h2>
    <p className="infoText">
      OUR EVENTS ARE BUILT TO BRING AARHUS - OR ANY CITY - A LITTLE CLOSER
      TOGETHER. SOMETIMES THROUGH MOVEMENT, SOMETIMES AROUND A TABLE, SOMETIMES
      THROUGH SHARED CURIOSITY.
    </p>
    <p className="infoText">
      RUNNING CLUBS THROUGH THE STREETS. WORKSHOPS WHERE HANDS GET BUSY.
      EVENINGS WHERE FOOD, CONVERSATION AND THE COMMUNITY MEET. THERE’S NO SINGLE
      FORMAT.
    </p>

    <h2 className="infoSectionTitle">BREADHEAD WORLDWIDE</h2>
    <p className="infoText">
      WE COLLABORATE WITH LOCAL MAKERS, ARTISTS, NEIGHBOURS AND FRIENDS OF
      BREADHEAD TO SHARE MOMENTS THAT FEEL NATURAL TO THE CITY WE’RE PART OF.
      ROOTED IN AARHUS, BUT OPEN TO INSPIRATION FROM ANYWHERE.
    </p>
    <p className="infoText">
      SOME PEOPLE COME TO RUN. SOME COME TO LEARN. SOME JUST COME TO BE AROUND
      OTHERS WHO ENJOY THE SAME THINGS. HOWEVER YOU ARRIVE, YOU’RE PART OF IT.
    </p>
    <p className="infoText">
      WE CONNECT THE BREADHEADS OF THE CITY WE’RE A PART OF.
    </p>
  </div>
);
}