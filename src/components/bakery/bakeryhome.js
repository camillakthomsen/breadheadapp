import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function bakeryhome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">BAKERY</h2>

      <nav className="bakeryNav">
        <NavLink to="/location">Location</NavLink>
        <NavLink to="/barista-course">Barista Course</NavLink>
        <NavLink to="/sourdough-course">Sourdough Course</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
    </div>
  );
}
