import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function runninghome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">RUNNING</h2>

      <nav className="bakeryNav">
        <NavLink to="/runninginfo">INFO</NavLink>
        <NavLink to="/events">EVENTS</NavLink>
      </nav>
    </div>
  );
}
