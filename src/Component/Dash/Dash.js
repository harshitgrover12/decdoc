import React, { Component } from 'react'
import Nav from '../nav/nav';
import Options from './Options/Options';
 class Dash extends Component {
    render() {
        return (
            <div>
              <Nav/> 
              <Options{...this.props}/> 
            </div>
        )
    }
}
export default Dash;
