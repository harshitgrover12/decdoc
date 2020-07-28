import React, { Component } from 'react'
import axios from 'axios';
import '../Dash/IssueDocument/issueDocument.css';
import Nav from '../nav/nav';
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
                <Nav />
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center labels">
                            <label className="mb-1">
                                <h6 className="mb-0 text-md">Organization Name</h6>
                            </label> <input className="mb-4" id="organizationname" type="text" name="organizationname" placeholder="Enter your username" ref={(input) => this.organizationname = input} onChange={this.handleChange} />

                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center labels">
                            <label className="mb-1">
                                <h6 className="mb-0 text-md">Secret key</h6>
                            </label> <input id="secret" type="password" name="secret" placeholder="Enter Secret key" ref={(input) => this.secret = input} onChange={this.handleChange} /> </div>

                        </div>
                   
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button type="submit" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Add to Blockchain!</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
        )
    }
}
export default CreateOrganization;
