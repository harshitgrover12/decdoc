import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Routes from './routes';
class App extends Component {
    render() {
        return (
            <div>
               <Routes {...this.props}/> 
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
     isauthenticated:state.isauthenticated,
     user_role:state.user_role
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changelogin: (isauthenticated) => dispatch({
      type:'LOGIN',
      isauthenticated:isauthenticated
    }),
    changeuserrole:(user_role)=>dispatch({
      type:'ROLE',
      user_role:user_role
    })
    }}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)

  
) (App);
