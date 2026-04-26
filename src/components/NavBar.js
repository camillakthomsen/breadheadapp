import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "../style/navbar.css";

export default function NavBar() {
  return (
    <header className="siteHeader">
      <div className="navRow">
        <NavLink to="/" className="navBrand">BREADHEAD</NavLink>

        <nav className="navDesktop">

          <NavLink to="/homebakery">Bakery</NavLink>
          <NavLink to="/events">Events</NavLink>
        <div className="dropdown"><span>Community</span>
            <div className="dropdownMenu">
                <NavLink to="/homerunning">Running</NavLink>
                <NavLink to="/bookclubinfo">Book Club</NavLink>
                <NavLink to="/firstfloorinfo">1st Floor</NavLink>
            </div>
        </div>

          <NavLink to="/bakery2business">BAKERY2BUSINESS</NavLink>
          <NavLink to="/jobinfo">Job</NavLink>
        </nav>

        {/* din eksisterende burger */}
        <div className="navMobileOnly">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}