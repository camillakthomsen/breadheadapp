import "../../style/events.css";
import { NavLink } from "react-router-dom";

export default function Events() {
  const events = [
    {
      title: "(BHRC)",
      date: "Every Tuesday",
      time: "KL. 6:45",
      topMid: "RUNNING",
      color: "#049CE7",
      bg: "#e3e9ef",
      to: "/runninginfo",
      heroFont: "simple", // ✅ ABCStefan-Simple
    },
    {
      title: "(BHRC)",
      date: "Every Thursday",
      time: "KL. 17:30",
      topMid: "RUNNING",
      color: "#049CE7",
      bg: "#e3e9ef",
      to: "/runninginfo",
      heroFont: "simple", // ✅ ABCStefan-Simple
    },
    {
      title: "BARISTA COURSE",
      date: "APRIL 21",
      time: "",
      topMid: "BREADHEAD",
      color: "#ffffff",
      bg: "#3D000F",
      to: "/barista-course",
      heroFont: "bubble", // ✅ FoundersSemibold (H1 look)
    },
    {
      title: "PILATES AND MATCHA",
      date: "MAJ 16",
      time: "",
      topMid: "BREADHEAD",
      color: "#ffffff",
      bg: "#3D000F",
      to: "/bakery/events",
      heroFont: "bubble", // ✅ BubbleTight
    },
    {
      title: "SOURDOUGH COURSE",
      date: "APRIL 27",
      time: "",
      topMid: "BREADHEAD",
      color: "#ffffff",
      bg: "#FF2626",
      to: "/sourdough-course",
      heroFont: "bubble", // ✅ FoundersSemibold
    },
  ];

  const fontMap = {
    bubble: `"ABCStefan-BubbleTight", sans-serif`,
    simple: `"ABCStefan-Simple", sans-serif`,
    h1: `"FoundersSemibold", sans-serif`,
  };

  return (
  <div className="eventsPage">
    <h1 className="eventsHeader">BREADHEAD BAKERY</h1>
    <h1 className="eventsHeader">EVENTS</h1>

    {/* TEXT BEFORE GRID */}
    <h2 className="eventsIntro">
      BREADHEAD IS MORE THAN BREAD AND COFFEE – IT’S ABOUT THE PEOPLE WHO SHOW UP
      AROUND IT.
    </h2>

    <div className="eventsGrid">
      {events.map((e, i) => (
        <article key={i} className="eventTileWrap">
          <div
            className="eventTile"
            style={{
              "--accent": e.color,
              "--bg": e.bg,
              "--heroFont": fontMap[e.heroFont] ?? fontMap.bubble,
            }}
          >
            <div className="eventTileTopSingle">{e.topMid}</div>

            <div className="eventTileCenter">
              <div className="eventTileHero">{e.title}</div>
            </div>

            <div className="eventTileBottom">
              <div className="eventTileWhen">
                <div>{e.date}</div>
                <div>{e.time}</div>
              </div>
            </div>
          </div>

          <div className="eventTileMeta">
            <NavLink className="eventTileLink" to={e.to}>
              READ MORE
            </NavLink>
          </div>
        </article>
      ))}
    </div>

    {/* TEXT AFTER GRID */}
    <h2 className="eventsSectionTitle">CITYGROWN EVENTS</h2>
    <p className="eventsText">
      OUR EVENTS ARE BUILT TO BRING AARHUS - OR ANY CITY - A LITTLE CLOSER
      TOGETHER. SOMETIMES THROUGH MOVEMENT, SOMETIMES AROUND A TABLE, SOMETIMES
      THROUGH SHARED CURIOSITY.
    </p>
    <p className="eventsText">
      RUNNING CLUBS THROUGH THE STREETS. WORKSHOPS WHERE HANDS GET BUSY.
      EVENINGS WHERE FOOD, CONVERSATION AND THE COMMUNITY MEET. THERE’S NO SINGLE
      FORMAT.
    </p>

    <h2 className="eventsSectionTitle">BREADHEAD WORLDWIDE</h2>
    <p className="eventsText">
      WE COLLABORATE WITH LOCAL MAKERS, ARTISTS, NEIGHBOURS AND FRIENDS OF
      BREADHEAD TO SHARE MOMENTS THAT FEEL NATURAL TO THE CITY WE’RE PART OF.
      ROOTED IN AARHUS, BUT OPEN TO INSPIRATION FROM ANYWHERE.
    </p>
    <p className="eventsText">
      SOME PEOPLE COME TO RUN. SOME COME TO LEARN. SOME JUST COME TO BE AROUND
      OTHERS WHO ENJOY THE SAME THINGS. HOWEVER YOU ARRIVE, YOU’RE PART OF IT.
    </p>
    <p className="eventsText">
      WE CONNECT THE BREADHEADS OF THE CITY WE’RE A PART OF.
    </p>
  </div>
);
}