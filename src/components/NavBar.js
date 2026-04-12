import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "../style/navbar.css";

export default function NavBar() {
  return (
    <header className="siteHeader">
      <div className="navRow">
        <NavLink to="/" className="navBrand">BREADHEAD</NavLink>

        <nav className="navDesktop">
          <NavLink to="/homebakery">BAKERY</NavLink>
          <NavLink to="/homerunning">RUNNING</NavLink>
          <NavLink to="/firstfloorinfo">1ST. FLOOR</NavLink>
          <NavLink to="/bookclubinfo">BOOK CLUB</NavLink>
          <NavLink to="/events">EVENTS</NavLink>
        </nav>

        {/* din eksisterende burger */}
        <div className="navMobileOnly">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}