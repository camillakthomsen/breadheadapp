import "../../style/home.css";
import { NavLink } from "react-router-dom";

export default function jobhome() {
  return (
    <div className="homeCenter">
      <h1 className="homeTitle">BREADHEAD</h1>
      <h2 className="homeSubtitle">JOBS</h2>

      <nav className="bakeryNav">
        <NavLink to="/jobinfo">JOB OPENINGS</NavLink>
      </nav>
    </div>
  );
}
