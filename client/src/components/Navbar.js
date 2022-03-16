import React, { useEffect } from "react";

function Navbar(props) {
  const { currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);
  return (
    <nav id="nav-fix">
      <ul className="flex-row mobile-view mt-3">
        {/* <li className={currentPage === "Login" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("Login")}>Login</span>
        </li>
        <li className={currentPage === "Register" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("Register")}>Register</span>
        </li> */}
        <li className={currentPage === "Home" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("home")}>Home</span>
        </li>
        <li className={currentPage === "About" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("applications")}>Job Apps</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
