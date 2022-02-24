import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
    </div>
  );
}

export default App;
