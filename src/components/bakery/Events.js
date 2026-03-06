import "../../style/events.css";

export default function Events() {
  const events = [
    {
      title: "RUNNING CLUB",
      date: "TIRSDAG 20. JAN",
      time: "KL. 17-18",
      price: "FREE",
      topLeft: "BREADHEAD",
      topMid: "RUNNING",
      color: "#3aa0ff",   // 🔵 blå outline/tekst
      bg: "#e3e9ef",      // mørk blå baggrund
    },
    {
      title: "BARISTA COURSE",
      date: "LØRDAG 25. JAN",
      time: "KL. 10-13",
      price: "499 DKK",
      topLeft: "BREADHEAD",
      topMid: "COFFEE",
      color: "#b67a3a",   // 🟤 brun
      bg: "#301d0b",      // mørk brun baggrund
    },
    {
      title: "SOURDOUGH COURSE",
      date: "SØNDAG 26. JAN",
      time: "KL. 11-14",
      price: "399 DKK",
      topLeft: "BREADHEAD",
      topMid: "BAKERY",
      color: "#ff2a2a",   // 🔴 rød
      bg: "#B6A6E7",
    },
    {
      title: "SOURDOUGH COURSE",
      date: "SØNDAG 26. JAN",
      time: "KL. 11-14",
      price: "399 DKK",
      topLeft: "BREADHEAD",
      topMid: "BAKERY",
      color: "#ff2a2a",   // 🔴 rød
      bg: "#B6A6E7",
    },
    {
      title: "RUNNING CLUB",
      date: "TIRSDAG 20. JAN",
      time: "KL. 17-18",
      price: "FREE",
      topLeft: "BREADHEAD",
      topMid: "RUNNING",
      color: "#3aa0ff",   // 🔵 blå outline/tekst
      bg: "#e3e9ef",      // mørk blå baggrund
    },
    {
      title: "BARISTA COURSE",
      date: "LØRDAG 25. JAN",
      time: "KL. 10-13",
      price: "499 DKK",
      topLeft: "BREADHEAD",
      topMid: "COFFEE",
      color: "#b67a3a",   // 🟤 brun
      bg: "#301d0b",      // mørk brun baggrund
    }
  ];

  return (
    <div className="eventsPage">
      <h1 className="eventsHeader">BREADHEAD EVENT</h1>

      <div className="eventsGrid">
        {events.map((e, i) => (
          <article
            key={i}
            className="eventCard"
            style={{
              "--accent": e.color,
              "--bg": e.bg,
            }}
          >
            <div className="eventMetaTop">
              <span>{e.topLeft}</span>
              <span>{e.topMid}</span>
              <span className="eventPrice">{e.price}</span>
            </div>

            <h2 className="eventTitle">{e.title}</h2>

            <div className="eventMetaBottom">
              <div className="eventDate">{e.date}</div>
              <div className="eventTime">{e.time}</div>
            </div>

            <div className="eventMetaBottom2">
              <span>{e.topLeft}</span>
              <span>{e.topMid}</span>
              <span className="eventPrice">{e.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
