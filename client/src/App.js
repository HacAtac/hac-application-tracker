import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Applications from "./components/Applications";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleClick = () => {
    switch (currentPage) {
      case "home":
        return <Home />;

      case "applications":
        return <Applications />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <div>
        <main>{handleClick()}</main>
      </div>
    </div>
  );
}

export default App;
