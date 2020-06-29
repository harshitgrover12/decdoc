import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/signIn/SignIn';
import FileUpload from './Component/fileUpload/fileUpload';
 class Routes extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                <Route exact path='/signIn' render={(props)=><SignIn{...this.props}/>}/>
                <Route exact path='/fileUpload' render={(props)=><FileUpload{...this.props}/>}/>
            </BrowserRouter>
                
            </div>
        )
    }
}
export default Routes;
