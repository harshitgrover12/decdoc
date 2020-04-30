import React,{Component} from 'react';
import './signUp.css';

class SignUp extends Component {
  
  render()
  {
    
  return (
      
    <div className="signup-form">
    <form > 
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div className="form-group">
			
				<input type="text" className="form-control" name="Full Name" placeholder="Full Name" required="required"onChange={this.handleNameChange}/>
				
			</div>        	
       
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"onChange={this.handleEmailChange}/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"onChange={this.handlePasswordChange}/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"onChange={this.handleConfirmPasswordChange}/>
        </div>        
        <div className="form-group">
			<label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg"onClick={this.handleSubmit}>Sign Up</button>
        </div>
    </form>
	<div className="hint-text"><a  href="/signin">Already have an account? </a></div>
</div>

  );
}};

export default SignUp;