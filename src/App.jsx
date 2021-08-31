import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import ImageAvatars from "./components/skills/Skills";
// import Education from "./components/education/Education";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Works />
        <ImageAvatars />
        <Portfolio />
        {/* <Education /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
