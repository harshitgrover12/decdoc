import React, { Component } from 'react'
import Nav from '../../nav/nav';
import '../IssueDocument/issueDocument.css';
import axios from 'axios';
import ipfs from '../../ipfs/ipfs';
 class SignContract extends Component {
          state = {
    // Initially, no file is selected
    selectedFile: null,
    buffer:null,
    ipfsHash:null
    
  };
    convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
    onFileChange = (event) => {
    // Update the state
    event.preventDefault();
    this.setState({ selectedFile: event.target.files[0] });
        const file = event.target.files[0];
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader) 
  };
  componentDidMount=()=>{
      console.log(this.props);
  }
  handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
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
          <h4>Choose before Pressing the Send button</h4>
        </div>
      );
    }
  };
  onFileUpload=async(e)=>
  {
    const data = new FormData(); 
    data.append('file', this.state.selectedFile);
const hashData=await ipfs.add(this.state.buffer);
       this.setState({
           ipfsHash:hashData.path
       })
    
    let userId;
    let id;
    let userIndex;
    
    
    await axios.post('https://mysterious-temple-37666.herokuapp.com/api/getuser',{
      username:this.state.username
    }).then(({data})=>{
      console.log(data);
      id=data.userData.id
      userIndex=data.userData.userIndex;
      console.log('reciever id is',data.userData.id);
      

    }).
    catch((e)=>alert(e));
    console.log(this.props.userdata.id)
    await axios.post('https://mysterious-temple-37666.herokuapp.com/issueAgreement',{
      private_key:this.state.private_key,
      documentHash:this.state.ipfsHash,
      receiver:id,
      senderIndex:this.props.userdata.userIndex,
      sender:this.props.userdata.id
    }).then((res)=>console.log(res)).catch((e)=>console.log(e))
  
  
  }
    render() {
        return (
            <div>

            <div>
                <Nav {...this.props}/>
                {
                  this.props.isauthenticated?(
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <ul className="lists">
                                <input type="input" id="username"name="username" placeholder="enter username" onChange={this.handleChange} ref={(input)=>this.username=input} />
                                <input type="password" id="private_key"name="private_key"placeholder="enter private key" onChange={this.handleChange} ref={(input)=>this.private_key=input} />
                                <input type="file" id="fileup" onChange={this.onFileChange} />

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                            <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse for your Documents!<i className="fa fa-file fa-1x" /></button>
                                <input type="file" id="fileup" onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                            <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Send<i className="fa fa-paper-plane fa-1x" /></button>
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            {this.fileData()}
                        </div>
                    </div>
                </div>):(<div/>)
                }
            </div>
                
                
            </div>
        )
    }
}
export default SignContract;
