import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

let otp2 = "";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      otp1: "",
      namedis:false,
      emaildis:false,
      vcode:true,
      otpbut:"Send Verification Code",
      otpsent:"",
      subdis:true,
      otpgen:false,
      otpdis:false,
      otpnv:"",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  sendOtp = e => {
    e.preventDefault();
    if(!this.state.otpgen)
    {
    otp2=Math.floor(Math.random() * (999999 - 100000)) + 100000;
    const data = {
      name:this.state.name,
      email:this.state.email,
      otp:otp2
    };
    axios.post('/verifyemail',data)
    .then(res =>
      this.setState(
        {
          namedis:true,
          emaildis:true,
          otpsent:res.data.mes,
          otpbut:"Resend Verification Code",
          vcode:false
        }
      )
    )
    .catch(err => 
      this.setState(
        {
          errors:err.response.data
        }
      )
      )
    }
    if(this.state.otpgen)
    {
      if(Number(this.state.otp1)===otp2)
      {
        this.setState(
          {
            otpsent:"Code Verified",
            otpdis:true,
            subdis:false,
            otpnv:"",
            vcode:true
          }
        )
      }
      else
      {
        this.setState(
          {
            otpnv:"Enter Valid Verification Code",
            otpsent:""
          }
        )
      }
    }
  };

  enterOtp = e => {
    e.preventDefault();
    this.setState(
      {
        otpbut:"Verify Code",
        otpgen:true,
        [e.target.id]: e.target.value,
        errors:{}
      }
    )
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
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
                  disabled={this.state.namedis}
                />
                <label htmlFor="name">Name</label>
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
                  disabled={this.state.emaildis}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12"
              style={{
                  width: "250px",
                  float:"left"
                }}
                >
                <input
                  onChange={this.enterOtp}
                  value={this.state.otp1}
                  id="otp1"
                  type="text"
                  className={classnames("", {
                    invalid: this.state.otpnv
                  })}
                  disabled={this.state.vcode}
                />
                <label htmlFor="otp">Verification Code</label>
                <span className="red-text">{this.state.otpnv}</span>
                <span className="green-text">{this.state.otpsent}</span>
                </div>
                <button
              style={{
                width: "300px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                float:"right"
              }}
              onClick={this.sendOtp}
              type="button"
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
              disabled={this.state.otpdis}
            >
              {this.state.otpbut}
            </button>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  disabled={this.state.subdis}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
