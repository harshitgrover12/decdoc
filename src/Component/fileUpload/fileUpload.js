import axios from "axios";
import React, { Component } from "react";
var crypto = require("crypto");
var fs = require("fs");
const Web3 = require("Web3");

const ABI = "";

class FileUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3000/filehash", data)
      .then((res) => console.log(res));

    //Interact with contracts
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );
    web3.eth.defaultAccount = web3.eth.accounts[0];

    let Orgnanization = web3.eth.contract(ABI);
    let OrganizationA;
    Organzation.at("0x3d3410425DC76b77aAb60DAf36b9D8b69ad7d085").then(
      (inst) => {
        OrganizationA = inst;
      }
    );
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
            {this.state.selectedFile.lastModifiedDate.toDateString()}
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
