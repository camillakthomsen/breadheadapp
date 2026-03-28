import "../../style/info.css";

import posterTuesday from "../../photo/tirsdag.png";
import posterThursday from "../../photo/torsdag.png";

export default function RunningInfo() {
  return (
    <div className="infoPage runningInfoBg">
      <div className="infoContainer">
        <h1 className="infoH1">
          BREADHEAD
          <br />
          RUNNING CLUB
        </h1>

        <h2 className="runningInfoH2">(BHRC)</h2>

        <h2 className="infoSectionTitle">RUN THROUGH AARHUS WITH US</h2>

        <p className="infoText">
          BREADHEAD RUNNING CLUB IS BUILT ON THE SAME VALUES AS EVERYTHING WE DO
          – QUALITY, COMMUNITY, AND THE RHYTHM OF THE CITY. WE RUN THROUGH THE
          STREETS THAT SHAPE US, NOT FOR COMPETITION, BUT FOR CONNECTION AND
          SHARED MOMENTS. IT’S ABOUT MOVING TOGETHER AND TURNING AN ORDINARY RUN
          INTO SOMETHING SOCIAL.
        </p>

        <p className="infoText">
          MEETING WHERE BREAD, COFFEE, AND PEOPLE ALREADY CROSS PATHS – AND
          TAKING THAT ENERGY OUT INTO THE CITY. INTENTIONAL, OPEN, AND ROOTED IN
          THE NEIGHBOURHOOD. COME FOR THE RUN, STAY FOR THE COFFEE, AND FEEL
          PART OF THE COMMUNITY IN BETWEEN.
        </p>

        <p className="infoText">
          JOIN US EVERY TUESDAY MORNING AND THURSDAY EVENING.
          <br />
          ALWAYS FROM NYMUNKEGADE 4B AARHUS.
        </p>

        <p className="infoText infoContactText">
          STAY IN TOUCH WITH BHRC THROUGH OUR{" "}
          <a className="infoLink" href="https://www.instagram.com/breadheadrunningclub/">
            SOCIAL MEDIA PROFILE
          </a>
          .
        </p>

        <div className="runningPosters">
          <img src={posterTuesday} alt="BHRC poster Tuesday" />
          <img src={posterThursday} alt="BHRC poster Thursday" />
        </div>
      </div>
    </div>
  );
}