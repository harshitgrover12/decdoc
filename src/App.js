import React,{Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp';

import './App.css';

class App extends Component {
  render(){
  return (
  <BrowserRouter>
        <div>
        <Navbar />
        <Route path='/signIn'render={()=><SignIn />}/>
        <Route path='/signUp'render={()=><SignUp />}/>
       
        </div>
        </BrowserRouter>
  );
}
}

export default App;

