import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#home">
            <span>Home</span>
          </a>
        </li>
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#about">
            <span>About</span>
          </a>
        </li>
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#skills">
            <span>Skills</span>
          </a>
        </li>
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#portfolio">
            <span>Portfolio</span>
          </a>
        </li>
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#education">
            <span>Education</span>
          </a>
        </li>
        {/* <li onClick={() => setMenuOpen(true)}>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li onClick={() => setMenuOpen(true)}>
          <a className="btn-draw" href="#contact">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
