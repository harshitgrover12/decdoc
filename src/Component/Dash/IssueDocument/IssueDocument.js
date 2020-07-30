import React, { Component } from 'react'
import Nav from '../../nav/nav';
import axios from 'axios';
import './issueDocument.css';
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
		await axios.post('/filehash',data).then(async(res)=>{hash=res.data.documentHash;
    
    await axios.post('/api/getuser',{
      username:this.state.username
    }).then(({data})=>{
      console.log(data);
      userIndex=data.userData.userIndex
      console.log(data.userData.userIndex);
      

    }).
    catch((e)=>alert(e));
    
    axios.post('/returnOrgIndex',{    //make this api that gives me the org index from organization schema in backend
      organizationName:this.props.userdata.organizationName
    }).then(async(res)=>{
      console.log("orgindex ka response",res);
      orgIndex=res.data.orgIndex;
      console.log(this.props.userdata.organizationName,hash,orgIndex,userIndex,this.state.secret);
      await organizationlist.methods.issueDocument(this.props.userdata.organizationName,hash,orgIndex,userIndex,this.state.secret).send({ from:account})
      .then(async({reciept})=> {
        console.log(reciept);
        await organizationlist.methods.getIssueDocument().call((err,res)=>{
          console.log(this.state.private_key);
      axios.post('/issueDocument',{
      orgId:this.props.userid,
      orgIndex:orgIndex,
      username:this.state.username,
      userIndex:userIndex,
      documentIndex:res,
      documentHash:hash,
      organizationName:this.props.userdata.organizationName,
      private_key:this.state.private_key
    }).then((res)=>console.log(res)).catch((e)=>console.log('get me issue'+e))
        })
       
      })
      .catch((e) => {
        console.log('contract me issue'+e);
      });
    }).catch((e)=>{console.log('main error');
    console.log(e)});
    

    
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
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <ul className="lists">
                                <input type="input" id="username"name="username" placeholder="enter username" onChange={this.handleChange} ref={(input)=>this.username=input}/>
                                  <input type="password" id="secret"name="secret"placeholder="enter secret" onChange={this.handleChange} ref={(input)=>this.secret=input}/>
                                  <input type="password" id="private_key"name="private_key"placeholder="enter private key" onChange={this.handleChange} ref={(input)=>this.private_key=input}/>
                                <input type="file" id="fileup" onChange={this.onFileChange} />

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse for your Documents!</button>
                                <input type="file" id="fileup" onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Upload</button>
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            {this.fileData()}
                        </div>
                    </div>
                </div>
            </div>


            /* 
              <div>
                <Nav />
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <ul className="lists">
                                <li className="listsli"><i className="icofont-check-circled listsi" /> User id:{this.state.userid}</li>
                                <li className="listsli"><i className="icofont-check-circled listsi" /> document hash:{this.state.hash}</li>

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
					            <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse for your Documents!</button>
                                <input type="file" id="fileup" onChange={this.onFileChange}/>
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Upload</button>
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            {this.fileData()}
                        </div>
                    </div>
             
             
             
             
             
             
             
             
             
             
             
             
             */
           
        ) 
    }
}
export default IssueDocument;
