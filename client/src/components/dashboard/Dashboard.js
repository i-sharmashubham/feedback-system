import React, { Component } from "react";
import Select from 'react-select';
import axios from 'axios'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      department:[],
      selectedOption:"",
      feedback:"",
      erremail:'',
      errfeed:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFeedback = this.handleChangeFeedback.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption,
      erremail:'' });
  }

  handleChangeFeedback(e){
    this.setState({
      feedback:e.target.value,
      errfeed:''
     });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.selectedOption&&!this.state.feedback)
    {
      this.setState({
        erremail:'Department is required',
        errfeed:'Feedback is required'
    })
      return
    }
    if(!this.state.selectedOption)
    {
      this.setState({erremail:'Department is required'})
      return
    }
    if(!this.state.feedback)
    {
      this.setState({errfeed:'Feedback is required'})
      return
    }
    const { user } = this.props.auth;
    const feedBack = {
      name:this.state.selectedOption.label,
      email:this.state.selectedOption.value,
      feedback:this.state.feedback,
      sendername:user.name,
      senderemail:user.email
    };
    axios.post('/routes/api/feedback',feedBack)
    .then(res=>alert(res.data.message))
  }



  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount()
  {
    axios.get('/api/department/dept')
    .then(res => {
      this.setState({department:res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    var options=[];
    this.state.department.map((dept,index) => 
    options.push(
      {
        "value" : dept.email,
        "label" : dept.name
      }
    ))
    const { user } = this.props.auth;
    const { selectedOption } = this.state;
    return (
        <div className="row" style={{marginTop:"60px", marginLeft:"10%", marginRight:"10%"}}>
          <div className="col s12 right-align">
            <h5>
              <b>Welcome,</b> {user.name}
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
            <h3><p>Write Feedback Here</p></h3>
          </div>
          <form noValidate onSubmit={this.handleSubmit}>
              <div className="input-field col s12">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder='Select Department'
              />
              <span className="red-text">{this.state.erremail}</span>
              </div>
              <div className="input-field col s12">
                <textarea
                  onChange={this.handleChangeFeedback}
                  value={this.state.feedback}
                  id="feedback"
                  className='materialize-textarea'
                />
                <label htmlFor="feedback">Feedback</label>
                <span className="red-text">{this.state.errfeed}</span>
              </div>
              <div className="col s12 center-align" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "300px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit Feedback
                </button>
              </div>
          </form>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
