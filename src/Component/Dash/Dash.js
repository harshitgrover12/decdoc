import React, { Component } from 'react'
import Nav from '../nav/nav';
import Options from './Options/Options';


 class Dash extends Component {
        
  constructor(props) {
    super(props);
    
  }
    render() {
        
        return (
            <div>
              <Nav{...this.props}/> 
              <Options{...this.props} /> 
              
            </div>
        )
    }
}
export default Dash;
