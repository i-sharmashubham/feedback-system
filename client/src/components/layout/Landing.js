import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div style={{ marginLeft: "0",marginRight: "0"}}className="row">
            <div className="row">
              <Link
                to="/register"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="row">
              <Link
                to="/login"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  display:"table"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Create new Feedback
              </Link>
            </div>
            <div className="row">
              <Link
                to="/admin"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Administrator Login
              </Link>
            </div>
            
        </div>
        <div className="col s12 center-align" style={{ marginLeft: "100px"}}>
            <h5>
              <b>Welcome</b> to a customer feedback system, click on the Register button if you are a new user or if already registered user then continue with create new feedback.
            </h5>
          </div>
      </div>
    );
  }
}

export default Landing;
