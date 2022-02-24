import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleClick = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;

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
