import React, { Component } from 'react'
import Nav from '../../nav/nav';
import './fliter/filter.css';
import axios from 'axios';
 class Requests extends Component {
    state={
        status:'requests',
        aggr:[],
        id:''
        
    
    
    }
   
  handleAccept=(id)=>
{
   
    axios.put('https://mysterious-temple-37666.herokuapp.com/agreementStatus',{
        id:id,
        status:'accepted'

    }).then((e)=>{
        axios.get(`https://mysterious-temple-37666.herokuapp.com/agreements/${this.props.userdata.id}`).then(({data})=>{
        console.log(data.msg);
        let aggr=[];
        aggr=[...data.msg,aggr];
        
        this.setState({
            aggr:aggr
    })
        }).then(()=>this.setState({status:'requests'}))
    
    })   
}
handleReject=(id)=>{
    
     axios.put('https://mysterious-temple-37666.herokuapp.com/agreementStatus',{
        id:id,
        status:'rejected'

    }).then((e)=>{
    axios.get(`https://mysterious-temple-37666.herokuapp.com/agreements/${this.props.userdata.id}`).then(({data})=>{
        console.log(data.msg);
        let aggr=[];
        aggr=[...data.msg,aggr];
        
        this.setState({
            aggr:aggr
    })
        }).then(()=>this.setState({status:'requests'}))
    })

}
setChange=(e)=>{
    
    e.preventDefault();
    this.setState({
        status:e.target.value
    })
}

componentWillMount=()=>
{
    
    axios.get(`https://mysterious-temple-37666.herokuapp.com/agreements/${this.props.userdata.id}`).then(({data})=>{
        console.log(data.msg);
        let aggr=[];
        aggr=[...data.msg,aggr];
        
        this.setState({
            aggr:aggr
    })
        })
        
}
    render() {
       
       
        console.log(this.state.aggr)
        return (
            <div>
                <Nav{...this.props}/>
              
                    <div className='filter'>
            
            
            <div id=''>
                <select onChange={this.setChange} value={this.state.status}>
                    <option  value='requests'>Requests</option>
                    <option value='accepted'>Accepted</option>
                    <option value='rejected'>Rejected</option>
                    <option value='sent'>Sent Requests</option>
                    
                </select>
            </div>
        </div>
                    {
                        this.state.status==='requests'?(
                            
                                
                                    
                                
                <div>{
                this.state.aggr.map((a)=>(
                    
                
                    a.receiver===this.props.userdata.id && a.status==='pending'?(
                    <div class="container" style={{border:"1px solid #cecece",marginTop:'100px'}}>
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                    </div>                                                      
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Username:{a.sender}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:{a.agreementHash}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                        <button className="button4" onClick={(e)=>{e.preventDefault();this.handleAccept(a._id)}}>Accept</button> 
                        <button className="button4" onClick={(e)=>{e.preventDefault();this.handleReject(a._id)}} >Reject</button>
                    </div>               
                    </div>                                                    
                   </div>):(<div/>)
                   )) }         
                </div>
                        ):(<div/>)
                    }
                      {
                        this.state.status==='accepted'?(
                <div>{this.state.aggr.map((a)=>
                a.receiver===this.props.userdata.id && a.status==='accepted'?(
                    <div class="container" style={{border:"1px solid #cecece",marginTop:'100px'}}>
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                    </div>                                                      
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> sender:{a.sender}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:{a.agreementHash}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                    </div>               
                    </div>                                                    
                   </div>):(<div/>) ) }        
                </div>
                        ):(<div/>)
                      }
                      {
                        this.state.status==='rejected'?(
                <div>
                {   this.state.aggr.map((a)=>
                a.receiver===this.props.userdata.id && a.status==='rejected'?(
                    <div class="container" style={{border:"1px solid #cecece",marginTop:'100px'}}>
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                    </div>                                                      
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> sender:{a.sender}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:{a.agreementHash}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                      
                    </div>               
                    </div>                                                    
                   </div>):(<div/>) )
                }         
                </div>
                        ):(<div/>)
                    }
                    {
                        this.state.status==='sent'?(
                <div>
                {   this.state.aggr.map((a)=>
                a.sender===this.props.userdata.id && a.status==='pending'?(
                    <div class="container" style={{border:"1px solid #cecece",marginTop:'100px'}}>
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                    </div>                                                      
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12"style={{position:'relative',left:'10px'}}> receiver:{a.receiver}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:{a.agreementHash}</div>               
                    </div>  
                    <div class="row" style={{marginTop:'10px'}}>                                                                 
                    <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                      
                    </div>               
                    </div>                                                    
                   </div>):(<div/>) )
                }         
                </div>
                        ):(<div/>)
                    }
                {/* ):

                    (<div/>)
                } */}
            </div>
        )
    }
}
export default Requests;