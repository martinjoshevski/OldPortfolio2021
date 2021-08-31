import "./topbar.scss";
import LightSpeed from "react-reveal/LightSpeed";
export default function Topbar() {
  return (
    <div className="topbar">
      <LightSpeed left cascade>
        <div className="wrapper">
          <div className="left">
            <div className="itemContainer">
              <li>
                <a href="#home" className="link btn-draw ">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="link btn-draw">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="link btn-draw">
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="link btn-draw">
                  <span>Portfolio</span>
                </a>
              </li>
              {/* <li>
                <a href="#resume" className="link btn-draw">
                  <span>Resume</span>
                </a>
              </li> */}
              <li>
                <a href="#contact" className="link btn-draw">
                  <span>Contact</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </LightSpeed>
    </div>
  );
}
