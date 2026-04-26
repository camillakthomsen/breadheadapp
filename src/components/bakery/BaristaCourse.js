import "../../style/info.css";
import bottomImg from "../../photo/bk1.jpg";

export default function BaristaCourse() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <br />
        {/* H1 (Bubble) */}
        <h1 className="infoHero">BARISTA COURSE</h1>

        {/* Intro: tekst + billede */}
        <div className="infoContainer">
          <p className="infoText">
            JOIN OUR BARISTA COURSE IN AARHUS AND SPEND A COZY EVENING LEARNING
            THE CRAFT BEHIND GREAT COFFEE.
          </p>
        </div>

        {/* H2 + tekst */}
        <h2 className="infoSectionTitle">BARISTA COURSE IN AARHUS</h2>
        <p className="infoText">
          IN THE COMPANY OF CECILIE, YOU WILL BE GUIDED THROUGH THE ESSENTIALS
          OF COFFEE BREWING - FROM ESPRESSO TO MILK STEAMING AND LATTE ART. THIS
          HANDS-ON COFFEE COURSE IS DESIGNED TO GIVE YOU BOTH KNOWLEDGE AND
          PRACTICAL SKILLS YOU CAN TAKE HOME AND USE RIGHT AWAY.
        </p>

        <h2 className="infoSectionTitle">LEARN THE BASICS OF BEING A BARISTA</h2>
        <p className="infoText">
          THIS BARISTA COURSE IS BUILT AROUND UNDERSTANDING COFFEE THROUGH BOTH
          TASTING AND TECHNIQUE. YOU WILL GET A THOROUGH INTRODUCTION TO
          ESPRESSO, MILK AND BREWING METHODS - AND LEARN HOW SMALL ADJUSTMENTS
          CAN MAKE A BIG DIFFERENCE IN TASTE.
        </p>

        <p className="infoText">
          WHAT’S INCLUDED IN THE BARISTA COURSE:
          <br />
          A TASTING OF COFFEE BREWED WITH DIFFERENT BEANS.
          <br />
          A THOROUGH INTRODUCTION TO BREWING ESPRESSO
          <br />
          LEARN HOW TO ADJUST YOUR ESPRESSO TO ACHIEVE THE BEST FLAVOR
          EXPERIENCE.
          <br />
          MILK WORKSHOP - HOW TO STEAM MILK PERFECTLY AND ACHIEVE THE RIGHT
          TEXTURE AND TEMPERATURE.
          <br />
          POURING TECHNIQUE AND LATTE ART
        </p>

        {/* Nederste: tekst + sort boks */}
        <div className="courseBottom">
          <p className="infoText courseBottomLeft">
            SPOTS ARE LIMITED TO KEEP THE COURSE PERSONAL AND HANDS-ON. BOOK
            YOUR PLACE AND LEARN HOW TO BREW BETTER COFFEE - ONE CUP AT A TIME.
          </p>

          <div className="courseInfoBox">
            <p>
              PRICE: DKK 450
              <br />
              DURATION: APPROX. 2 HOURS
              <br />
              LOCATION: NY MUNKEGADE 4B, AARHUS C
              <br />
              TIME: 7:00 PM
              <br />
              <br />
              DATE: APRIL 21
              <br />
              SIGN-UP: CN@BREADHEADBAKERY.DK
            </p>
          </div>
        </div>

        {/* stort billede i bunden */}
        <img className="courseBottomImg" src={bottomImg} alt="Latte art" />
      </div>
    </div>
  );
}