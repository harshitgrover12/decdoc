import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/signIn/SignIn';
 class Routes extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/signIn' component={SignIn}/>
            </BrowserRouter>
                
            </div>
        )
    }
}
export default Routes;
