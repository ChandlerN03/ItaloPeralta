import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Experience from "./Experience";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Work></Work>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}

export default App;
