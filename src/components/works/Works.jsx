import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide] = useState(0);
  const data = [
    {
      id: "1",
      // icon: "./assets/mobile.png",
      title: "Hello! I am Martin, nice to meet you! ",

      desc: "I am a Front-end Web Developer with a flair for creating elegant solutions in the least amount of time. Passionate about software engineering and architecture. I love to code things from scratch, and enjoy bringing ideas to life in the browser. I am quietly confident and curious, and perpetually working on improving my craft. Tools and Languages that I use: HTML, CSS, Sass, TailWind CSS, JavaScript, React, Node.js, Firebase, Adobe Creative Suite and more. Away from work, I love grabbing a coffee with wonderful people. If I can be of assistance, please do not hesitate to contact me.",

      img: "https://i.imgur.com/XbIRmvx.png",
      link: <a href="#contact">Let's talk!</a>,
      resume: (
        <a href="assets/Martin Joshevski CV martinjoshevski.com.pdf">
          Download Resume
        </a>
      ),
    },
    // {
    //   id: "2",
    //   icon: "./assets/globe.png",
    //   title: "Skills",
    //   desc: "I start by asking questions and setting goals. I always follow the current market and aim to be always up-to-date with the newest and most demanding techologies. I take time to understand the industry, and I always flood myself with a variety of inspiration. But I also take care to put that inspiration away when it comes time for execution. I learn how to prioritize information that is most important.",
    //   img: "https://i.imgur.com/RytBtBK.png",
    // },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "Resume",
    //   // desc: "Check out",
    //   link: (
    //     <a href="./mj.pdf" download target="_Blank" rel="noreferrer">
    //       Download
    //     </a>
    //   ),
    //   img: "https://i.imgur.com/mthRced.png",
    // },
  ];

  return (
    <div className="works" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <img src={d.img} alt="" />
              </div>
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer"></div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <h3>{d.link}</h3>
                  <h3>{d.resume}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
