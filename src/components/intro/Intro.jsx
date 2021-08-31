import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-end Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="home">
      <div className="right">
        <div className="wrapper">
          <Fade left cascade>
            <h3>Hi There, I'm</h3>
            <h1>Martin Joshevski</h1>
          </Fade>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
