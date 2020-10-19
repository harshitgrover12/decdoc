import React, { Component } from 'react'
import Nav from '../../nav/nav';
 class Requests extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Nav{...this.props}/>
                {/* {
                this.props.isauthenticated?( */}
                <div>
                    <div class="container" style={{border:"1px solid #cecece",marginTop:'100px'}}>
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:</div>          
                    </div>                                                      
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Username:</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                        <button className="button4" >Accept</button> 
                        <button className="button4" >Reject</button>
                    </div>               
                    </div>                                                    
</div>          
                </div>
                {/* ):

                    (<div/>)
                } */}
            </div>
        )
    }
}
export default Requests;