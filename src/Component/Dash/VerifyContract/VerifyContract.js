import React, { Component } from 'react'
import Nav from '../../nav/nav';
import axios from 'axios';
import '../IssueDocument/IssueDocument'
import ipfs from '../../ipfs/ipfs';
 class VerifyContract extends Component {
          state = {
    // Initially, no file is selected
    selectedFile: null,
    authentic:'verification pending',
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
          <p style={{fontWeight:'bold'}}>Authenticity of file:{this.state.authentic}</p>
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
      const {account,organizationlist,gas,gas_price}=this.props;
    const data = new FormData(); 
    data.append('file', this.state.selectedFile);
   
    
    let userId;
    let id;
    let senderIndex;
    let receiverIndex;
    const hashData=await ipfs.add(this.state.buffer);
       this.setState({
           ipfsHash:hashData.path
       })
		
     await axios.post('https://mysterious-temple-37666.herokuapp.com/returnUserDetails',{
         username:this.state.sender
     }).then(({data})=>{
         senderIndex=data.userIndex
     })
     await axios.post('https://mysterious-temple-37666.herokuapp.com/returnUserDetails',{
         username:this.state.receiver
     }).then(({data})=>{
         receiverIndex=data.userIndex
     })

  let user1;
  let user2;
  console.log('senderIndex:',senderIndex,'receiverIndex:',receiverIndex)
  await organizationlist.methods.checkSign1(this.state.ipfsHash).call((err,res)=>{
      user1=res;
           
  }).catch((e)=>console.log(e))
    await organizationlist.methods.checkSign2(this.state.ipfsHash).call((err,res)=>{
        user2=res;
           
  }).catch((e)=>console.log(e))
  console.log('user1:',user1,'user2:',user2)
  if(parseInt(user1)===senderIndex && parseInt(user2)===receiverIndex)
  {
      this.setState({
          authentic:'verified'
      })
  }
  else
  {
  this.setState({
      authentic:'not verified'
  })
  }
  
  
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
                                <input type="input" id="sender"name="sender" placeholder="enter sender's username" onChange={this.handleChange} ref={(input)=>this.sender=input} />
                                <input type="input" id="receiver"name="receiver"placeholder="enter receiver's username" onChange={this.handleChange} ref={(input)=>this.receiver=input} />
                                <input type="file" id="fileup" onChange={this.onFileChange} />

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                            <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse for your Documents! <i className="fa fa-file fa-1x" /></button>
                                <input type="file" id="fileup" onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                            <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Verify <i className="fa fa-search fa-1x" /></button>
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
export default VerifyContract;
