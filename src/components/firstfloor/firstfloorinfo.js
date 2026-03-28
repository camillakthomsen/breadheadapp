import "../../style/info.css";

import firstfloor1 from "../../photo/bakery.webp";
import firstfloor2 from "../../photo/bakery.webp";
import firstfloor3 from "../../photo/bakery.webp";

export default function FirstFloorInfo() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        {/* Top (H1) */}
        <h1 className="infoH1">
          BREADHEAD
          <br />
          1ST. FLOOR
        </h1>

        {/* Section */}
        <h2 className="infoSectionTitle">BREADHEAD DINING EXPERIENCES</h2>
        <p className="infoText">UPSTAIRS WE SLOW THINGS DOWN.</p>

        <p className="infoText">
          BREADHEAD 1ST FLOOR IS OUR SPACE FOR PRIVATE DINING, SOCIAL DINING AND
          SHARED TABLE EXPERIENCES IN AARHUS. EVENINGS THAT BRING PEOPLE A LITTLE
          CLOSER TOGETHER. A PLACE WHERE FOOD BECOMES THE REASON TO GATHER - AND
          THE STARTING POINT FOR CONVERSATION.
        </p>

        <h2 className="infoSectionTitle">FOOD. WINE. COMMUNITY.</h2>
        <p className="infoText">
          THROUGHOUT THE YEAR WE HOST SOCIAL DINING EXPERIENCES, WHERE LOCAL AND
          FAMILIAR CHEFS TAKE OVER THE KITCHEN AND COOK FOR THE ROOM. LONG
          TABLES. SHARED PLATES. GOOD WINE. STRANGERS WHO SLOWLY BECOME PART OF
          THE SAME TABLE.
        </p>

        <p className="infoText infoContactText">
          STAY UPDATED ON CURRENT EVENTS{" "}
          <a className="infoLink" href="/events">
            HERE
          </a>
          .
        </p>

        <p className="infoText">
          THE SPACE IS SIMPLE AND AESTHETIC BY DESIGN. WARM LIGHT, HONEST
          MATERIALS AND ROOM FOR PEOPLE TO SETTLE IN AND STAY A WHILE.
        </p>

        <p className="infoText">
          SOME EVENINGS YOU COME TO MEET NEW PEOPLE THROUGH A SHARED INTEREST IN
          FOOD, CRAFT AND THE CITY WE’RE PART OF. OTHER TIMES THE SPACE IS YOURS.
        </p>

        <h2 className="infoSectionTitle">BOOK FOR PRIVATE EVENTS</h2>
        <p className="infoText">
          BREADHEAD 1ST FLOOR CAN ALSO BE BOOKED FOR PRIVATE DINNERS,
          CELEBRATIONS, TALKS OR GATHERINGS - A PLACE TO BRING YOUR OWN PEOPLE
          TOGETHER IN CALM AND CONSIDERED SURROUNDINGS.
        </p>

        {/* Gallery */}
        <div className="infoGallery">
          <img src={firstfloor1} alt="Breadhead 1st floor 1" />
          <img src={firstfloor2} alt="Breadhead 1st floor 2" />
          <img src={firstfloor3} alt="Breadhead 1st floor 3" />
        </div>
      </div>
    </div>
  );
}