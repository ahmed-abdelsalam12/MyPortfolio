import Header from "./component/1-header/header";
import Hero from "./component/2-hero/Hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer";

import { useEffect, useState } from "react";
function App() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {



      if (window.scrollY > 490) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  return (
    <div className="container" id="Home">
      <Header />
      <div className="divider" id="About" />
      <Hero />
      <div className="divider" id="Projects" />
      <Main />
      <div className="divider" id="Contact" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#Home">
        <a style={{ opacity: show ? 1 : 0, transition: "1s" }} href="#Home">
          <button className="icon-keyboard_arrow_up scroll2up "></button>
        </a>
      </a>
    </div>
  );
}

export default App;
