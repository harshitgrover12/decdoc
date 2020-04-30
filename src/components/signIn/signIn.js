import React,{Component} from 'react';
import './sign.css';
import {Router} from 'react-router-dom';
const axios = require('axios')
class SignIn extends Component{
    state={
        Email:'',
        Password:''
    }
    onEmailChange=(e)=>{
        this.setState({
            Email:e.target.value
        })
    }
    onPasswordChange=(e)=>{
        this.setState({
            Password:e.target.value
        });
    }
    onSubmit=(e)=>{
       e.preventDefault();
        
       alert(this.state.Email);
       
        
 
axios.post('https:sample-endpoint.com/user', {
    Email: this.state.Email,
    Password:this.state.Password
  })
  .then(function (response) {
    console.log(response);
  });
          
        
    }
    
    render(){
        
    return(
    
<div className="login-form">
    <form >
        <h2 className="text-center">Sign in</h2>   
        <div className="form-group">
        	<div className="input-group">
                <span className="input-group-addon"><i ></i></span>
                <input type="text" className="form-control" name="email" placeholder="Email" required="required"onChange={this.onEmailChange}/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <span className="input-group-addon"><i ></i></span>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"onChange={this.onPasswordChange}/>				
            </div>
        </div>        
        <div className="form-group">
            
            <button type="submit" className="btn btn-primary login-btn btn-block" onClick={this.onSubmit}>Sign in</button>
        </div>
        <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with your social media account</p>
        <div className="text-center social-btn">
            <a href="#" className="btn btn-primary"><i className="fa fa-facebook"></i>&nbsp; Facebook</a>
            <a href="#" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</a>
			<a href="#" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</a>
        </div>
    </form>
    <p className="text-center text-muted small">Don't have an account? <a href="/signUp">Sign up here!</a></p>
</div>
    );}
}
export default SignIn;