import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12 right-align">
                <h5 className="white-text">Designed and Implement By :</h5>
              </div>
              <div className="col l4 offset-l2 s12 right-align">
              <h5>Shubham Kumar Sharma</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="mailto:sk.jsr.ind@gmail.com">Mail Me</a></li>
                  <li><a className="grey-text text-lighten-3" href="tel:7870182258">Call Me</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/i.sharmashubham">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/i_sharmashubham/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright center-align">
            <div className="container">
            © Shubham Kumar Sharma 2019
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
