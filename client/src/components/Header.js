import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="flex flex-wrap justify-between px-1 header">
      <h2>
        <a href="/" className="navActive" id="name-style">
          <span id="icon" role="img" aria-label="icon" className="navActive">
            🖥️
          </span>{" "}
          Application's Name
        </a>
      </h2>
      <div>
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Navbar>
      </div>
    </header>
  );
}

export default Header;
