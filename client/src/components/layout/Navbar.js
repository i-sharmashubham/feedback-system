import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-extended blue">
      <div className="nav-wrapper">
      <Link
              to="/"
              style={{
                fontFamily: "monospace",
                fontSize:"35px"
              }}
              className="col s5 brand-logo center black-text"
            >
            CUSTOMER FEEDBACK SYSTEM						
            </Link>
      </div>
      <div className="tabs tabs-transparent">
      </div>
    </nav>
    );
  }
}

export default Navbar;
