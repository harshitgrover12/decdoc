import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/signIn/SignIn';
import About from './Component/about/About';
import Dash from './Component/Dash/Dash';
import IssueDocument from './Component/Dash/IssueDocument/IssueDocument';
import CreateOrganization from './Component/createOrganization/CreateOrganization';
import CreateUser from './Component/createUser/CreateUser';
import VerifyDocument from './Component/Dash/VerifyDocument/verify';
import SignContract from './Component/Dash/SignContract/SignContract';
import Requests from './Component/Dash/Requests/Requests';
import UploadIPFS from './Component/upload/upload';
import VerifyContract from './Component/Dash/VerifyContract/VerifyContract';

 class Routes extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                <Route exact path='/signIn' render={(props) => <SignIn{...this.props} />} />
                <Route exact path='/about' render={(props) => <About{...this.props} />} />
                <Route exact path='/dash' render={(props)=><Dash{...this.props}/>}/>
                <Route exact path='/issueDocument' render={(props)=><IssueDocument{...this.props}/>}/>
                <Route exact path='/createOrganization' render={(props)=><CreateOrganization{...this.props}/>}/>
                <Route exact path='/createUser' render={(props)=><CreateUser{...this.props}/>}/>
                <Route exact path='/verifyDocument' render={(props)=><VerifyDocument{...this.props}/>}/>
                <Route exact path='/signContract' render={(props)=><SignContract{...this.props}/>}/>
                <Route exact path='/verifyDocument'render={(props)=><VerifyDocument{...this.props}/>}/>
                <Route exact path='/uploadipfs'render={(props)=><UploadIPFS{...this.props}/>}/>
                <Route exact path='/viewRequests'render={(props)=><Requests{...this.props}/>}/>
                <Route exact path='/verifyContract'render={(props)=><VerifyContract{...this.props}/>}/>
            </Switch>
                
            </div>
        )
    }
}
export default Routes;
