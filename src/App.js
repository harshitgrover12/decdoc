import React,{Component} from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp';
import LogOut from './components/LogOut/LogOut';

import './App.css';

class App extends Component {
  state={
    isSignedIn:false,

  }
 isSignIn=(issign)=>{
    this.setState({
      isSignedIn:issign
    })
  }
  render(){
  return (
  <BrowserRouter>
        <div>
        <NavBar />
        <Route exact path='/signIn' render={(props)=><SignIn {...props} isSignIn={this.isSignIn}/>}/>
          <Route exact path='/signUp' component={SignUp}/>
          <Route exact path='/home' component={LogOut}/>
        
        
       
        </div>
        </BrowserRouter>
  );
}
}

export default App;

