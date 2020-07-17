import React, { Component } from 'react'
import axios from 'axios';
 class CreateUser extends Component {
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
  await organizationlist.methods.createUser(this.state.name,this.state.secret).send({ from:account})
      .then(async(resp)=> {
         console.log(resp);
         await organizationlist.methods.getUser().call((err,res)=>{
            console.log(res);
             axios.post('http://localhost:3000/createUser',{
             username:this.state.name,
             userIndex:res
             
         })
         })
        
       })
       .catch((e) => {
         console.log(e);
       });
      
       
    }
     
    render() {
        return (
            <div>
                 <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm"> Name</h6>
                  </label> <input className="mb-4" id="name" type="text" name="name" placeholder="name" ref={(input)=>this.name=input} onChange={this.handleChange}/> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Secret key</h6>
                  </label> <input id="secret" type="password" name="secret" placeholder="Enter Secret key" ref={(input)=>this.secret=input} onChange={this.handleChange} /> </div>
                            <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleSubmit}>Add to Blockchain!</button> </div>
            </div>
        )
    }
}
export default CreateUser;
