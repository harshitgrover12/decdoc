import React, { Component } from 'react'
import Nav from '../../nav/nav';
import axios from 'axios';
 class IssueDocument extends Component {
     state = {
    // Initially, no file is selected
    selectedFile: null,
  };
    onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  componentDidMount=()=>{
      console.log(this.props);
  }
  handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
  }
  onFileUpload=async(e)=>{
const {account,organizationlist,gas,gas_price}=this.props;
 const data = new FormData(); 
    data.append('file', this.state.selectedFile);
    let hash;
    
    let userId;
    let userIndex;
    let orgIndex;
		axios.post('http://localhost:3000/filehash',data).then((res)=>{hash=res;
    
    axios.post('http://localhost:3000/api/getuser',{
      username:this.state.username
    }).then((result)=>{

      userIndex=result.userIndex;

    }).
    catch((e)=>alert(e));
    
    axios.post('http://localhost:3000/returnOrgIndex',{    //make this api that gives me the org index from organization schema in backend
      organizationName:this.props.userdata.organizationName
    }).then(async(res)=>{
      orgIndex=res.data.orgIndex;
      console.log(orgIndex);
      await organizationlist.methods.issueDocument(this.props.userdata.organizationName,hash,orgIndex,userIndex,this.state.secret).send({ from:account})
      .then(async({reciept})=> {
        console.log(reciept);
        await organizationlist.methods.getIssueDocument().call((res)=>{
      axios.post('http://localhost:3000/issueDocument',{
      orgId:this.props.userid,
      orgIndex:orgIndex,
      username:this.state.username,
      userIndex:userIndex,
      documentIndex:res,
      documentHash:hash

    }).then((res)=>console.log(res)).catch((e)=>alert(e))
        })
      })
      .catch((e) => {
        console.log(e);
      });
    }).catch((e)=>alert(e));
    

    
    })
    
  

    
  }
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate &&
              this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
    render() {
        return (
            <div>
                <Nav /> 

            <div style={{marginTop:'200px'}}>
        <ul style={{listStyle:'none'}}>
        <li>Hash:{this.state.hash}</li>
        
        <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm"> Name</h6>
                  </label> <input className="mb-4" id="username" type="text" name="username" placeholder="Username" ref={(input)=>this.username=input} onChange={this.handleChange}/> </div>
                        <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Secret key</h6>
                  </label> <input id="secret" type="password" name="secret" placeholder="Enter Secret key" ref={(input)=>this.secret=input}onChange={this.handleChange} /> </div>
        </ul>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Issue the document!</button>
        </div>
        {this.fileData()}
      </div>
            </div>
        ) 
    }
}
export default IssueDocument;
