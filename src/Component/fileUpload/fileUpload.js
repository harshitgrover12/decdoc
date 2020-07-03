import axios from "axios";
import React, { Component } from "react";
import orgApi from "../contracts/OrganizationList.json";
import organizationApi from "../contracts/Organization.json";
import Web3 from "web3";

const ABI = "";

class FileUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };
  componentDidMount = () => {};

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  //THIS IS JUST TO TEST! OTHERWISE WE WILL NOT DEPLOY NEW ORGANIZATION ON FILE UPLOAD
  //WE WILL ADD THIS CODE LATER IN SIGNUP FOR ORGANIZATION
  onFileUpload = (e) => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3000/filehash", data)
      .then((res) => console.log(res))
      .catch((res) => console.log("api not available"));

    //Interact with contracts
    var web3 = new Web3("http://localhost:7545");
    const accounts = web3.eth.getAccounts();
    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log(accounts);
    console.log(web3);
    //Lakshit --> 0x54e49673489b448cE7357B217fD25671C6C1a57e
    //Wallet --> 0x980e74Cb7eEEB5bAF5077593D48c3b45680203f7
    let OrganizationList = new web3.eth.Contract(
      orgApi.abi,
      "0x54e49673489b448cE7357B217fD25671C6C1a57e"
    );
    let OrganizationA = new web3.eth.Contract(
      organizationApi.abi,
      "0x4B471beC6775dfa9f5732b90C36e8860e29071D5"
    );

    OrganizationList.methods
      .getDeployedOrganizations()
      .send({
        from: "0x980e74Cb7eEEB5bAF5077593D48c3b45680203f7",
        gas: "100000",
        gasPrice: "100",
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });

    //issue document in org's name
    // OrganizationA.methods
    //   .issueDocument(
    //     "fakeurl",
    //     "fakehash",
    //     "fakeoid",
    //     "fakeuserid",
    //     "fakesecret"
    //   )
    //   .send({
    //     from: "0x980e74Cb7eEEB5bAF5077593D48c3b45680203f7",
    //     gas: "100000",
    //     gasPrice: "100",
    //   })
    //   .then((r) => {
    //     console.log(r);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    OrganizationA.methods
      .verifyDocument("fakeurl", "fakeoid", "fakeuserid", 0, "fakehash")
      .send({
        from: "0x980e74Cb7eEEB5bAF5077593D48c3b45680203f7",
        gas: "100000",
        gasPrice: "100",
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // File content to be displayed after
  // file upload is complete
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
        <h1>GeeksforGeeks</h1>
        <h3>File Upload using React!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default FileUpload;
