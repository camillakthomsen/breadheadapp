import "../../style/location.css";

export default function Location() {
  return (
    <div className="locWrap">
      {/* Venstre */}
      <div className="locCard">
        <div className="locImages">
          <div className="locImg locImgBase leftBase" />
          <div className="locImg locImgHover leftHover" />
        </div>

        <div className="locText">
          <h2>J. M. Mørks Gade 7, kl</h2>
          <p>Mon-fri 8-18</p>
          <p>Sat-sun 7-16</p>
        </div>
      </div>

      {/* Højre */}
      <div className="locCard">
        <div className="locImages">
          <div className="locImg locImgBase rightBase" />
          <div className="locImg locImgHover rightHover" />
        </div>

        <div className="locText">
          <h2>Ny Munkegade 4B</h2>
          <p>Mon-fri 8-18</p>
          <p>Sat-sun 7-16</p>
        </div>
      </div>
    </div>
  );
}