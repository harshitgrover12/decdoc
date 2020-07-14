import React, { Component } from 'react'
import axios from 'axios'
 class CreateOrganization extends Component {
     handleChange=(e)=>{
         this.setState(
             {
         [e.target.id]:e.target.value
             }
         )
     }
     handleSubmit=async(e)=>{
        const {account,organizationlist,gas,gas_price}=this.props;
  
    const {userid}=this.props;
    await organizationlist.methods.createOrganization(this.props.userid,this.state.organizationname,this.state.secret).send({ from:account})
      .then(({reciept})=> {
         console.log(reciept);
         
       })
       .catch((e) => {
         console.log(e);
       });
        let orgIndex;
       await organizationlist.methods.getOrganization().call((err,res)=>{
         orgIndex=res;  
       })
       .catch((e) => {
         console.log(e);
       });
       axios.post('http://localhost:3000/createOrganization',{
           orgId:this.props.userid,
           orgIndex:orgIndex
       }).then((res)=>{
           console.log(res);
       }).catch((e)=>alert(e))
    }
     
    render() {
        return (
            <div>
                 <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Organization Name</h6>
                  </label> <input className="mb-4" id="organizationname" type="text" name="organizationname" placeholder="Enter your username" ref={(input)=>this.organizationname=input} onChange={this.handleChange}/> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Secret key</h6>
                  </label> <input id="secret" type="password" name="secret" placeholder="Enter Secret key" ref={(input)=>this.secret=input}onChange={this.handleChange} /> </div>
                            <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleSubmit}>Add to Blockchain!</button> </div>
            </div>
        )
    }
}
export default CreateOrganization;
