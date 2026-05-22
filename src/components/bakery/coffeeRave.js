import "../../style/info.css";
import raveImg from "../../photo/coffeeravefont.png";

export default function CoffeeRave() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <br />

        {/* HERO IMAGE */}
        <img src={raveImg} alt="Coffee Rave" className="raveHero" />

        {/* TEXT */}
        <div className="raveContent">

          <p className="infoText">
            AARHUS, DENMARK - AY STUDIOS® AND BREADHEAD ARE JOINING FORCES FOR A
            COLLABORATIVE MORNING EVENT THAT BRINGS THE PEOPLE OF AARHUS A LITTLE
            CLOSER.
          </p>

          <p className="infoText">
            SATURDAY, JUNE 13TH, 2026, WE INVITE THE CITY TO EXPERIENCE “COFFEE
            RAVE” - A MORNING GATHERING SHAPED AROUND CITYGROWN GOODS, MUSIC AND
            GOOD ENERGY.
          </p>

          <p className="infoText">
            WHILE AY STUDIOS® REPRESENTS FUNCTIONAL SCANDINAVIAN EYEWEAR,
            BREADHEAD BRINGS ARTISANAL BAKING AND COFFEE CULTURE ROOTED IN
            EVERYDAY RITUALS AND THE APPRECIATION OF GOOD CRAFTSMANSHIP.
          </p>

          <p className="infoText">
            MORE THAN JUST AN EVENT, COFFEE RAVE IS ABOUT BRINGING AARHUS
            TOGETHER FOR A DIFFERENT KIND OF MORNING. COMBINING FRESHLY BAKED
            GOODS, COFFEE, HEAVY BEATS AND A HIGH-ENERGY ATMOSPHERE IN THE HEART
            OF AARHUS.
          </p>

          <p className="infoText">
            TO MARK THE OCCASION, AY STUDIOS® IS INTRODUCING A LIMITED
            COLLABORATION FRAME FEATURING CUSTOM RED LENSES AND A BOLD SILHOUETTE
            BALANCING CHARACTER WITH ARCHITECTURAL STRUCTURE.
          </p>

          {/* HIGHLIGHTS */}
          <p className="infoText">
            HIGHLIGHTS
            <br />
            • LIMITED EDITION COLLABORATION SUNGLASSES
            <br />
            • COMPLIMENTARY PASTRY AND BATCH BREW FOR THE FIRST 100 GUESTS
            <br />
            • CURATED GOODIEBAGS FOR SELECTED GUESTS AND MERCH
            <br />
            • DJ, COFFEE AND MORNING RAVE ATMOSPHERE
          </p>

          {/* DETAILS */}
          <p className="infoText">
            DETAILS
            <br />
            DATE: SATURDAY, JUNE 13TH, 2026
            <br />
            TIME: FROM 09–11 AM
            <br />
            LOCATION: BREADHEAD, NY MUNKEGADE 4B, AARHUS
          </p>

          <p className="infoText">
            FOR THE CITY. BY THE CITY. FOLLOW THE SUN.
          </p>

        </div>
      </div>
    </div>
  );
}