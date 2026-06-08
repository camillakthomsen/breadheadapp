import "../../style/info.css";

export default function Bakery2Business() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <br />

        {/* H1 */}
        <h1 className="infoHero">BAKERY2BUSINESS</h1>

        {/* Intro */}
        <p className="b2bIntro">
          WE DELIVER FRESHLY BAKED BREAD AND PASTRIES DIRECTLY TO YOUR BUSINESS - EASY, FAST, AND ALWAYS FRESHLY MADE.
        </p>

        <p className="b2bIntro">
          WANT TO GIVE YOUR TEAM A BETTER START TO THE DAY?
        </p>

        <p className="b2bIntro">
          BREADHEAD BAKERY BRINGS BREAKFAST AND COFFEE DIRECTLY TO YOUR WORKPLACE.
        </p>

        <p className="b2bIntro">
          FRESHLY BAKED SOURDOUGH BUNS WITH CHEESE, PASTRIES AND FRESHLY BREWED COFFEE - SERVED STRAIGHT FROM OUR BAKING UNIT TO YOUR MORNING TABLE.
        </p>

        <p className="b2bIntro">
          FOR MORNING MEETINGS, FRIDAY BREAKFASTS, EVENTS OR SIMPLY A BETTER START TO THE WORKDAY.
        </p>

        <p className="b2bIntro">
          WE TAILOR EACH SETUP TO YOUR WISHES, YOUR TEAM AND THE KIND OF MORNING YOU WANT TO CREATE.
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
            <p>MANDA EATERY</p>
            <p>RS28</p>
            <p>CAPO</p>
            <p>FREDERIKSHØJ</p>
            <p>BARISTA</p>
            <p>KOPKAFÉ</p>
          </div>
        </div>

      </div>
    </div>
  );
}