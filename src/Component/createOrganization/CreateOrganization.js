import React, { Component } from 'react'
import axios from 'axios';
import '../Dash/IssueDocument/issueDocument.css';
import Nav from '../nav/nav';
 class CreateOrganization extends Component {
     state={
         afterclick:false,
         private_key:""
     }
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
    console.log(organizationlist);
    await organizationlist.methods.createOrganization(this.state.organizationname,this.state.secret).send({ from:account})
      .then(async({reciept})=> {
         console.log(reciept);
          let orgIndex;
          
       await organizationlist.methods.getOrganization().call((err,res)=>{

        axios.post('/createOrganization',{
           orgName:this.state.organizationname,
           orgIndex:res,
       }).then((res)=>{
           console.log(res)
           this.setState({
           afterclick:true,
           private_key:res.data.private_key
       })
        //   this.props.history.push('/signIn')
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
        if(this.props===null||!this.props)
        {
            console.log("props ka pangea");
        }
        else
        {
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
                                <button type="submit" class="btn btn-primary btn-lg" onClick={(e)=>this.handleSubmit(e)}>Add to Blockchain!</button>
                            </div>
                        </div>
                    </div>
                    {
                    this.state.afterclick?(
                        <div>
                <h3>Private key(Copy and store it in a safe position)</h3>
                <textarea class="form-control" id="describeProposal" rows="10" value={this.state.private_key} style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                <div className="row mb-3 px-3"> <button className="btn btn-primary btn-lg" onClick={()=>this.props.history.push("/signIn")}>Sign in</button> </div>
                </div>
                    ):
                    (<div/>)
                
                    }
                </div>

                </div>
        )
        }
    }
}
export default CreateOrganization;
