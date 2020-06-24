import React, { Component } from 'react'
import './SignIn.css';
class SignIn extends Component {
    constructor(props){
        super(props);
    this.state={
            active:false
    }
    }
    handleLoginClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:true
            });
        }
        handleRegisterClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:false
            });
        }
    render() {
        
        return (
              <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row"> <img src="https://i.imgur.com/CXQmsmF.png" className="logo" /> </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                {this.state.active?(
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                ):
                (<h6 className="mb-0 mr-4 mt-2">Register with</h6>)
                }
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook" />
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter" />
                  </div>
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin" />
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" /> <small className="or text-center">Or</small>
                  <div className="line" />
                </div>
                {this.state.active?(
                    <div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger " onClick={this.handleRegisterClick}>Register</a></small> </div>
              </div>):
              ( <div>
              <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Name</h6>
                  </label> <input className="mb-4" type="text" name="name" placeholder="Enter your full name" /> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> 
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Register</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a className="text-danger" onClick={this.handleLoginClick}>Login</a></small> </div>
              </div>)}
              </div>
            </div>
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright © 2019. All rights reserved.</small>
              <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm" /> <span className="fa fa-google-plus mr-4 text-sm" /> <span className="fa fa-linkedin mr-4 text-sm" /> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" /> </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
export default SignIn;
