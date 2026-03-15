import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function bakeryhome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">BAKERY</h2>

      <nav className="bakeryNav">
        <NavLink to="/bakeryinfo">INFO</NavLink>
        <NavLink to="/location">LOCATION</NavLink>
        <NavLink to="/events">EVENTS</NavLink>
      </nav>
    </div>
  );
}
