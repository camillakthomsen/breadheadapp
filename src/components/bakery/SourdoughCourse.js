import "../../style/info.css";

import bottomImg from "../../photo/sk1.jpg";

export default function SourdoughCourse() {
  return (
    <div className="infoPage">
      <div className="infoContainer">
        <br />
        <br />
        <br />
        {/* H1 (Bubble) */}
        <h1 className="infoHero">SOURDOUGH COURSE</h1>

        {/* Intro: tekst + billede */}
        <div className="infoContainer">
          <p className="infoText">
            JOIN OUR SOURDOUGH COURSE IN AARHUS AND LEARN HOW TO BAKE BREAD FROM
            SCRATCH.
          </p>

        </div>

        {/* H2 + tekst */}
        <h2 className="infoSectionTitle">LEARN TO BAKE BREAD</h2>
        <p className="infoText">
          SPEND A COZY EVENING IN THE COMPANY OF DAVID MILBERG, OWNER OF
          DAVIDBREADHEAD, AND GET HANDS-ON EXPERIENCE WITH SOURDOUGH BAKING,
          DOUGH HANDLING AND TRADITIONAL BAKING TECHNIQUES. THIS BAKING CLASS IN
          AARHUS IS DESIGNED FOR ANYONE WHO WANTS TO UNDERSTAND THE CRAFT BEHIND
          GREAT BREAD – WHETHER YOU’RE A BEGINNER OR ALREADY BAKING AT HOME.
        </p>

        <h2 className="infoSectionTitle">
          LEARN SOURDOUGH BAKING - FROM THEORY TO PRACTICE
        </h2>
        <p className="infoText">
          DURING THIS SOURDOUGH COURSE, YOU WILL LEARN BOTH THE FUNDAMENTALS AND
          THE PRACTICAL TECHNIQUES NEEDED TO BAKE HIGH-QUALITY BREAD AT HOME. YOU
          WILL WORK WITH DOUGH YOURSELF AND GAIN A DEEPER UNDERSTANDING OF THE
          BAKING PROCESS.
        </p>

        <p className="infoText">
          WHAT YOU WILL LEARN:
          <br />
          THEORY
          <br />
          DOUGH HANDLING
          <br />
          WHAT TO DO IF SOMETHING GOES WRONG
          <br />
          YOU WILL MAKE YOUR OWN DOUGH FROM SCRATCH
          <br />
          YOU WILL LEARN HOW TO SHAPE BREAD
          <br />
          SCORING - AND HOW TO DO IT
          <br />
          HOW TO ROLL CROISSANTS
        </p>

        <p className="infoText">
          THIS IS A HANDS-ON BAKING CLASS WHERE YOU WILL MAKE YOUR OWN DOUGH
          FROM SCRATCH AND LEARN TECHNIQUES YOU CAN USE AT HOME.
        </p>

        {/* Nederste: tekst + sort boks */}
        <div className="courseBottom">
          <p className="infoText courseBottomLeft">
            WHAT’S INCLUDED IN THE SOURDOUGH COURSE
            <br />
            YOUR OWN BREAD TO TAKE HOME
            <br />
            BANNETON BASKET
            <br />
            CROISSANTS TO BAKE AT HOME
            <br />
            A LIGHT DINNER
            <br />
            LEARNING
            <br />A COZY EVENING
          </p>

          <div className="courseInfoBox">
            <p>
              PRICE: DKK 1,100
              <br />
              DURATION: APPROX. 3 HOURS
              <br />
              LOCATION: NY MUNKEGADE 4B, AARHUS C
              <br />
              TIME: 5:00 PM
              <br />
              PLEASE BRING AN APRON
              <br />
              <br />
              DATE: APRIL 27
              <br />
              SIGN-UP: BREADHEAD@BREADHEADBAKERY.DK
            </p>
          </div>
        </div>

        {/* stort billede i bunden */}
        <img className="courseBottomImg" src={bottomImg} alt="Baking" />
      </div>
    </div>
  );
}