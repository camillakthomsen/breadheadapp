import "../../style/info.css";

export default function Bakery2Business() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <br />

        {/* H1 */}
        <h1 className="infoHero">BAKERY 2 BUSINESS</h1>

        {/* Intro */}
        <p className="b2bIntro">
          WE DELIVER FRESHLY BAKED BREAD AND PASTRIES DIRECTLY TO YOUR BUSINESS - EASY, FAST, AND ALWAYS FRESHLY MADE.
        </p>

        <p className="b2bIntro">
          DO YOU WANT TO SERVE OUR GOODS OR ORDER FOR MEETINGS, OFFICES, AND EVENTS?
        </p>

        <p className="b2bIntro">
          PLEASE GET IN TOUCH <br />
          <span className="b2bMail">BREADHEAD@BREADHEADBAKERY.DK</span>
        </p>

        {/* Liste */}
        <div className="b2bList">
          <p>WE DELIVER TO:</p>

          <div className="b2bPlaces">
            <p>ACT</p>
            <p>MANAA EATERY</p>
            <p>RAS28</p>
            <p>CAPO</p>
            <p>FREDERIKSHØJ</p>
            <p>BARISTA</p>
            <p>KOPKAFÉ</p>
            <p>STUEN TV</p>
          </div>
        </div>

      </div>
    </div>
  );
}