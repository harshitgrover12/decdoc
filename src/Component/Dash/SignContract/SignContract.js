import React, { Component } from 'react'
import Nav from '../../nav/nav';
import axios from 'axios';
 class SignContract extends Component {
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
    let hash;
    
    let userId;
    let id;
    
		await axios.post('https://mysterious-temple-37666.herokuapp.com/filehash',data).then(async(res)=>{hash=res.data.documentHash;
    
    await axios.post('https://mysterious-temple-37666.herokuapp.com/api/getuser',{
      username:this.state.username
    }).then(({data})=>{
      console.log(data);
      id=data.userData.id
      console.log('reciever id is',data.userData.id);
      

    }).
    catch((e)=>alert(e));
    console.log(this.props.userdata.id)
    await axios.post('https://mysterious-temple-37666.herokuapp.com/issueAgreement',{
      private_key:this.state.private_key,
      documentHash:hash,
      receiver:id,
      sender:this.props.userdata.id
    }).then((res)=>console.log(res)).catch((e)=>console.log(e))
  })
  
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
                                <input type="input" id="username"name="username" placeholder="enter username" onChange={this.handleChange} ref={(input)=>this.username=input} style={{width:'500px'}}/>
                                <input type="password" id="private_key"name="private_key"placeholder="enter private key" onChange={this.handleChange} ref={(input)=>this.private_key=input} style={{width:'1200px'}}/>
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
                                <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Send</button>
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
