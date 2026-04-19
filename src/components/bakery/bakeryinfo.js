import React from "react";
import { Link } from "react-router-dom";
import "../../style/info.css";

import info1 from "../../photo/bp.jpg";
import info2 from "../../photo/bp1.jpg";
import info3 from "../../photo/bp2.jpg";

function bakeryInfo() {
  return (
    <section className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <h2 className="infoHero">GOOD BREAD<br />GOOD CITY</h2>

        <p className="infoText">
          WHAT STARTED AS A HOBBY DURING THE COVID PERIOD HAS GROWN INTO A
          BAKERY IN AARHUS WITH A PROFESSIONAL SETUP - BUILT AROUND CRAFT AND A
          LOVE FOR GOOD BREAD.
        </p>

        <h2 className="infoSectionTitle">THE BAKING UNIT</h2>

        <p className="infoText">
          AT THE HEART OF IT ALL IS OUR BREADHEAD BAKING UNIT.
        </p>

        <p className="infoText">
          EVERY MORNING WE PRODUCE SOURDOUGH BREAD, BUNS AND PASTRIES THAT FILL
          OUR OWN CAFÉS AND MAKE THEIR WAY OUT INTO THE CITY. ALONGSIDE THEM
          COMES CARDAMOM BUNS, CINNAMON ROLLS, CROISSANTS, PAIN AU CHOCOLAT AND
          OTHER FLAKY GOODS. BAKED FRESH EVERY DAY.
        </p>

        <p className="infoText">
          EVERYTHING MADE BY HAND.
          <br />
          EVERYTHING BAKED LOCALLY IN AARHUS.
        </p>

        <h2 className="infoSectionTitle">
          SUPPLYING CAFÉS AND RESTAURANTS IN AARHUS
        </h2>

        <p className="infoText">
          FROM OUR BAKING UNIT WE SUPPLY OUR OWN CAFÉS AS WELL AS SELECTED CAFÉS
          AND RESTAURANTS IN AARHUS. PLACES THAT CARE ABOUT THE SAME THINGS WE
          DO - QUALITY, INTENTION AND GOOD CRAFTSMANSHIP.
        </p>

        <p className="infoText">
          BECAUSE GOOD BREAD ISN’T JUST A PRODUCT.
          <br />
          IT’S PART OF PEOPLE’S DAILY ROUTINES.
        </p>

        <p className="infoText">
          A MORNING COFFEE.
          <br />
          A TABLE SHARED WITH FRIENDS.
          <br />
          A SMALL PAUSE IN THE MIDDLE OF THE DAY.
        </p>

        <p className="infoText">
          BREADHEAD BAKERY IN AARHUS IS BUILT TO SUPPORT THOSE MOMENTS - BAKING
          FRESH SOURDOUGH BREAD AND PASTRIES EVERY DAY, FROM OUR BAKING UNIT TO
          THE CITY.
        </p>

        <p className="infoText infoContactText">
          WANT TO SERVE BREADHEAD GOODS? FEEL FREE TO GET IN TOUCH{" "}
          <Link to="/contact" className="infoLink">
            HERE
          </Link>
        </p>

        <div className="infoGallery">
          <img src={info1} alt="Breadhead bakery info 1" />
          <img src={info2} alt="Breadhead bakery info 2" />
          <img src={info3} alt="Breadhead bakery info 3" />
        </div>
      </div>
    </section>
  );
}

export default bakeryInfo;