import React from "react";
import logo from "./logo.svg";
import LogoMain from "./assets/icons/LogoMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="container">
        <LogoMain />
      </section>
    </div>
  );
}

export default App;
