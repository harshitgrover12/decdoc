import React, { Component } from 'react'
import Nav from '../../nav/nav';
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
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
    render() {
        return (
            <div>

            <div>
                <Nav {...this.props}/>
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
                
            </div>
        )
    }
}
export default SignContract;
