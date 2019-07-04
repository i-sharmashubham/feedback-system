import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDept } from "../../actions/authActions";
import classnames from "classnames";
import { logoutUser } from "../../actions/authActions";

class AdminDash extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone:"",
      errors:{}
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    this.props.addDept(newUser, this.props.history);
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row" style={{marginTop:"60px", marginLeft:"10%", marginRight:"10%"}}>
          <div className="col s12 right-align">
            <h5>
              <b>Welcome Admin,</b> ({user.name})
            </h5>
          </div>
          <div className="col s12 right-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          <div className="col s12 center-align">
            <h3><p>Manage Departmant Coordinator</p></h3>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Department Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Department Coordinator Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  className={classnames("", {
                    invalid: errors.phone
                  })}
                />
                <label htmlFor="phone">Department Coordinator Phone</label>
                <span className="red-text">{errors.phone}</span>
              </div>
              <div className="col s12 center-align" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "400px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Add Department Coordinator
                </button>
              </div>
            </form>
          
        </div>
      </div>
    );
  }
}

AdminDash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addDept: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addDept, logoutUser }
)(withRouter(AdminDash));
