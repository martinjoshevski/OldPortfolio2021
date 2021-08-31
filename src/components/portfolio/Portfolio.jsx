import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import "../intro/intro.scss";
import { webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      // title: "Web Applications",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            demo={item.demo}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>
              {d.title}
              <a href={d.demo} target="_blank" rel="noreferrer">
                <span>Demo </span>
              </a>
              <a href={d.source} target="_blank" rel="noreferrer">
                <span> Source</span>
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
