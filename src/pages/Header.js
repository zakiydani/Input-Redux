import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div>
        <Link to="/">Input</Link>
      </div>
      <div>
        <Link to="/list">List</Link>
      </div>
    </div>
  );
}

export default Header;
