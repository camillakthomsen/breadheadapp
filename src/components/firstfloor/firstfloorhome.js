import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function firstfloorhome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">1ST. FLOOR</h2>

      <nav className="bakeryNav">
        <NavLink to="/firstfloorinfo">INFO</NavLink>
        <NavLink to="/events">EVENTS</NavLink>
      </nav>
    </div>
  );
}
