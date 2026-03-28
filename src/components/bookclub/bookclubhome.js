import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function bookclubhome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">BOOKCLUB</h2>

      <nav className="bakeryNav">
        <NavLink to="/bookclubinfo">INFO</NavLink>
        <NavLink to="/events">EVENTS</NavLink>
        <NavLink to="/contact">OPEN FOR SIGN UP</NavLink>
      </nav>
    </div>
  );
}
