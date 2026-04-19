import "../../style/info.css";

import bookclub1 from "../../photo/bakery.webp";
import bookclub2 from "../../photo/bakery.webp";
import bookclub3 from "../../photo/bakery.webp";

export default function BookclubInfo() {
  return (
    <div className="infoPage bookInfoBg">
      <div className="infoContainer">
        <br />
        <br />
        <h2 className="infoHero">BOOK CLUB</h2>

        <p className="infoText bookInfoText">
          BREADHEAD BOOK CLUB IS BUILT ON THE SAME VALUES AS EVERYTHING WE DO –
          QUALITY, COMMUNITY, AND THE RHYTHM OF THE CITY. WE GATHER AROUND
          STORIES THAT SHAPE US. NO EXPECTATIONS, ANALYSIS OR PRESTIGE, BUT FOR
          CONVERSATION, CONNECTION, AND SHARED MOMENTS. IT’S ABOUT SLOWING DOWN
          TOGETHER AND TURNING AN ORDINARY EVENING INTO SOMETHING SOCIAL.
        </p>

        <p className="infoText bookInfoText">
          MEETING WHERE BREAD, COFFEE, AND PEOPLE ALREADY CROSS PATHS – AND
          LETTING GOOD BOOKS BRING US EVEN CLOSER. INTENTIONAL, OPEN, AND ROOTED
          IN THE NEIGHBOURHOOD. COME FOR THE READING, STAY FOR THE COFFEE, AND
          FEEL PART OF THE COMMUNITY IN BETWEEN.
        </p>

        <p className="infoText bookInfoText">
          ONE CYCLE CONSIST OF
          <br />
          3 MONTHS
          <br />
          3 BOOKS
          <br />
          3 MEET UPS IN BREADHEAD 1ST. FLOOR, AARHUS
        </p>

        <p className="infoText bookInfoText">
          WE’D LOVE TO SHARE THE TABLE WITH NEW FACES.
        </p>

        <div className="infoGallery bookInfoGallery">
          <img src={bookclub1} alt="Book club 1" />
          <img src={bookclub2} alt="Book club 2" />
          <img src={bookclub3} alt="Book club 3" />
        </div>
      </div>
    </div>
  );
}