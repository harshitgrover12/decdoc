import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/signIn/SignIn';
import About from './Component/about/About';
import Dash from './Component/Dash/Dash';
import FileUpload from './Component/fileUpload/fileUpload';

 class Routes extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                    <Route exact path='/signIn' render={(props) => <SignIn{...this.props} />} />
                    <Route exact path='/about' render={(props) => <About{...this.props} />} />
                <Route exact path='/fileUpload' render={(props)=><FileUpload{...this.props}/>}/>
                 <Route exact path='/dash' render={(props)=><Dash{...this.props}/>}/>
            </Switch>
                
            </div>
        )
    }
}
export default Routes;
