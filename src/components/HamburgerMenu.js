import { Link } from "react-router-dom";
import { useRef } from "react";
import "../style/hamburgerMenu.css";

import facebookIcon from "../photo/facebook.png";
import instagramIcon from "../photo/instagram.png";
import tiktokIcon from "../photo/tiktok.png";

export default function HamburgerMenu() {
  const checkboxRef = useRef(null);

  const closeMenu = () => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input ref={checkboxRef} type="checkbox" id="menuCheckbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/events" onClick={closeMenu}>Events</Link>
          </li>
          <li>
            <Link to="/sourdough-course" onClick={closeMenu}>Sourdough course</Link>
          </li>
          <li>
            <Link to="/barista-course" onClick={closeMenu}>Barista course</Link>
          </li>
          <li>
            <Link to="/location" onClick={closeMenu}>Location</Link>
          </li>

          {/* Ikoner under teksten */}
          <li className="menuSocials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
