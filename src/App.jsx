import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [activeContent, setActiveContent] = useState("portrait");
  const handleNavigation = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="App">
      <div className="appfront">
        <Navbar></Navbar>
        <div className="body">
          <Hero activeContent={activeContent}></Hero>
          <Navigation handleNavigation={handleNavigation}></Navigation>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
