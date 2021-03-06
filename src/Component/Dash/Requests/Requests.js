import React, { Component } from 'react'
import Nav from '../../nav/nav';
import './fliter/filter.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
 class Requests extends Component {
    state={
        status:'requests',
        aggr:[],
        name:[],
       
    }
   
  handleAccept=(id,senderIndex,agreementHash)=>
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
        }).then(()=>this.setState({status:'requests'})).then(()=>{
            const {account,organizationlist,gas,gas_price}=this.props;
            
         organizationlist.methods.signDocument(senderIndex,this.state.userIndex,agreementHash).send({ from:account})
      .then(async({reciept})=> {
         console.log(reciept);
      })
        })
    
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
        this.setState({
            userIndex:this.props.userdata.userIndex
        })
        
}
getName=(id)=>{
    var name="";
     axios.get(`https://mysterious-temple-37666.herokuapp.com/getuser/${id}`).then((user)=>{
        
        name=name.concat(user.data.user.username);
        console.log(name);
        return name;
        
    })
   
    
    
    
    
}
    render() {
       
       let url="https://gateway.ipfs.io/ipfs/";
       
        // console.log(this.state.aggr)
        console.log(this.state.userIndex);
        return (
            <div>
                <Nav{...this.props}/>
              
                    <div className='filter' >
                        <div id=''>
                            <select onChange={this.setChange} value={this.state.status}>
                                <option  value='requests'>My Requests</option>
                                <option value='accepted'>Accepted</option>
                                <option value='rejected'>Rejected</option>
                                <option value='sent'> Requests Sent</option>
                    
                            </select>
                        </div>
                     </div>
                    {
                        this.state.status==='requests'?(                                   
                                
                <div>
                            {
                                
                this.state.aggr.map((a)=>(
                    
                
                    a.receiver===this.props.userdata.id && a.status==='pending'?(
                        <div class="container" style={{ border: "1px solid #cecece", marginTop: '100px' }}>
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                        </div>                                                      
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Username:{a.sender_username}</div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File Name:<a href={url+a.agreementHash} target="_blank">{a.filename}</a></div>               
                        </div> 
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'10px'}}> Date : {a.timestamp}</div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                                <button className="button4" onClick={(e)=>{e.preventDefault();this.handleAccept(a._id,a.senderIndex,a.agreementHash)}}>Accept</button> 
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
                    a.receiver === this.props.userdata.id && a.status === 'accepted' ? (
                        <div class="container" style={{ border: "1px solid white", marginTop: '45px', marginBottom :'10px' }}>
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                                        <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                                        <Card.Title>Request Id:{a._id} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted accsub">sender:{a.sender_username}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted accsub">Date: {a.timestamp}</Card.Subtitle>

                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className={"acctog"}>
                                    <Card.Body>
                                        
                                            File:<a href={url + a.agreementHash} className="viewfile" target="_blank">{a.filename}</a>
                                         
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>


                  
                            {/**   <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                        </div>                                                      
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12"style={{position:'relative',left:'10px'}}> sender:{a.sender}</div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:<a href={url+a.agreementHash} target="_blank">view file</a></div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                        </div>               
                            </div>   
                            **/}
                        </div>) : (<div />))
                        }        
                </div>
                        ):(<div/>)
                      }
                      {
                        this.state.status==='rejected'?(
                <div>
                {   this.state.aggr.map((a)=>
                a.receiver===this.props.userdata.id && a.status==='rejected'?(
                        <div class="container" style={{ border: "1px solid white", marginTop: '45px', marginBottom: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                                        <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                                        <Card.Title>Request Id:{a._id} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted accsub">sender:{a.sender_username}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted accsub">Date: {a.timestamp}</Card.Subtitle>

                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className={"acctog"}>
                                        <Card.Body>

                                            File:<a href={url + a.agreementHash} target="_blank" className="viewfile ">{a.filename}</a>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>


                            {/**
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                        </div>                                                      
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12"style={{position:'relative',left:'10px'}}> sender:{a.sender}</div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:<a href={url+a.agreementHash} target="_blank">view file</a></div>               
                        </div>  
                        <div class="row" style={{marginTop:'10px'}}>                                                                 
                             <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                        </div>               
                        </div>     
                        **/}
                   </div>):(<div/>) )
                }         
                </div>
                        ):(<div/>)
                    }
                    {
                        this.state.status==='sent'?(
                <div>
                {   this.state.aggr.map((a)=>
                a.sender===this.props.userdata.id ?(
                        <div class="container" style={{ border: "1px solid white", marginTop: '45px', marginBottom: '10px'  }}>

                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                                        <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                                        <Card.Title>Request Id:{a._id} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted accsub">receiver:{this.getName(a.receiver)}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted accsub">Date:{a.timestamp}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted accsub">Status:{a.status}</Card.Subtitle>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className={"acctog"}>
                                        <Card.Body>

                                            File:<a href={url + a.agreementHash} target="_blank" className="viewfile ">{a.filename}</a>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>




                            {/***  <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12"style={{position:'relative',left:'10px'}}> Request Id:{a._id}</div>          
                            </div>                                                      
                            <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12"style={{position:'relative',left:'10px'}}> receiver:{a.receiver}</div>               
                            </div>  
                            <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12" style={{position:'relative',left:'10px'}}> File:<a href={url+a.agreementHash} target="_blank">view file</a></div>               
                            </div>  
                            <div class="row" style={{marginTop:'10px'}}>                                                                 
                            <div class="col-xs-12" style={{position:'relative',left:'900px'}}> 
                      
                            </div>               
                            </div>   
                            **/}
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