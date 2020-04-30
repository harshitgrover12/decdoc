import React,{Component} from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp';

import './App.css';

class App extends Component {
  render(){
  return (
  <BrowserRouter>
        <div>
        <NavBar />
        <Route exact path='/signIn' component={SignIn}/>
        <Route exact path='/signUp' component={SignUp}/>
       
        </div>
        </BrowserRouter>
  );
}
}

export default App;

