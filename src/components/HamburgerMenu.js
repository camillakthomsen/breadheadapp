import { Link } from "react-router-dom";
import { useRef } from "react";
import "../style/hamburgerMenu.css";

import facebookIcon from "../photo/facebook.png";
import instagramIcon from "../photo/instagram.png";
import tiktokIcon from "../photo/tiktok.png";
import linkedinIcon from "../photo/linkedin.png";

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
    <Link to="/homebakery" onClick={closeMenu}>Bakery</Link>
  </li>

  <li>
    <Link to="/events" onClick={closeMenu}>Events</Link>
  </li>

  {/* COMMUNITY */}
  <li className="mobileCommunity">
    <span>Community</span>

    <div className="mobileDropdown">
      <Link to="/homerunning" onClick={closeMenu}>Running</Link>
      <Link to="/bookclubinfo" onClick={closeMenu}>Book Club</Link>
      <Link to="/firstfloorinfo" onClick={closeMenu}>1st Floor</Link>
        </div>
          </li>

          <li>
              <Link to="/bakery2business" onClick={closeMenu}>
              Bakery2Business
              </Link>
          </li>

          <li>
            <Link to="/jobhome" onClick={closeMenu}>Jobs</Link>
          </li>

          {/* Ikoner under teksten */}
          <li className="menuSocials">
            <a href="https://www.facebook.com/Breadheadaarhus" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/breadhead_aarhus/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@breadhead_aarhus" target="_blank" rel="noreferrer" aria-label="TikTok">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href="https://www.linkedin.com/company/breadheadbakery/?originalSubdomain=dk" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
