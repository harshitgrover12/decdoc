import React, { Component } from 'react'
import Nav from '../../nav/nav';
import '../Requests/fliter/filter.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
 class ViewDocuments extends Component {
    state={
        
        aggr:[],
        id:''
    }
   
 

componentWillMount=()=>
{
    
    axios.get(`https://mysterious-temple-37666.herokuapp.com/personaldoc/${this.props.userdata.id}`).then(({data})=>{
        console.log(data.msg);
        let aggr=[]
        aggr=[...data.msg,aggr];
        aggr.pop();
        this.setState({
            aggr:aggr
    })
        })
        console.log(this.state.aggr);
        
}
    render() {
       
       let url="https://gateway.ipfs.io/ipfs/";
        console.log(this.state.aggr)
        return (
            <div>
                <Nav{...this.props}/>
               
                        
                <div style={{marginTop:'80px'}}>
                {this.state.aggr.map((a)=>
                        
                        <div class="container" style={{ border: "1px solid white",  marginBottom :'10px' }}>
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                                        
                                        <Card.Title>File Name:<a href={url + a.hash} style={{top:'4px'}} target="_blank">{a.filename}</a> </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted accsub">Upload Date:{a.timestamp}</Card.Subtitle>
                                   

                                </Accordion.Toggle>
                                
                            </Card>
                        </Accordion>

                        </div>
                  
                )}
                
                        </div>
                          
                      

            </div>
            )
        
    }}

export default ViewDocuments;