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
  onFileUpload=async(e)=>{
const {account,organizationlist,gas,gas_price}=this.props;
 const data = new FormData() 
    data.append('file', this.state.selectedFile)
		axios.post('http://localhost:3000/filehash',data).then((res)=>console.log(res));

        const hash="afb7ad40f25697edaf4f0dd597810067aa65f1efab95eca3b0cf9aa8026d320c";
 await organizationlist.methods.createOrganization("HarshitCompany","1234","secrethai").send({ from:account})
      .then(({reciept})=> {
         console.log(reciept);
       })
       .catch((e) => {
         console.log(e);
       });
     await organizationlist.methods.createUser("1234","Harshit","secret").send({ from:account})
      .then(({reciept})=> {
        console.log(reciept);
      })
      .catch((e) => {
        console.log(e);
      });
await organizationlist.methods.issueDocument("harshit@123",hash,"HarshitCompany","1234","secrethai").send({ from:account})
      .then(({reciept})=> {
        console.log(reciept);
      })
      .catch((e) => {
        console.log(e);
      });
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
            <Nav/> 
            <div style={{marginTop:'200px'}}>
        <ul style={{listStyle:'none'}}>
        <li>User id:{this.state.userid}</li>
        <li>document hash:{this.state.hash}</li>
        
        </ul>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
            </div>
        )
    }
}
export default IssueDocument;
