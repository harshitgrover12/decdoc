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
    await organizationlist.methods.createOrganization(this.state.organizationname,this.state.secret).send({ from:account})
      .then(async({reciept})=> {
         console.log(reciept);
          let orgIndex;
       await organizationlist.methods.getOrganization().call((err,res)=>{

        axios.post('http://localhost:3000/createOrganization',{
           orgName:this.state.organizationname,
           orgIndex:res,
       }).then((res)=>{
          this.props.history.push('/signIn')
           console.log(res);
       }).catch((e)=>alert(e)) 

       })
       .catch((e) => {
         console.log(e);
       });
         
       })
       .catch((e) => {
         console.log(e);
       });
       
       
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
