import axios from "axios";
import React, { Component } from "react";
import orgApi from '../contracts/OrganizationList.json';
import Web3 from 'web3';





const ABI = "";

class FileUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };
  componentDidMount=()=>{
	  
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = async(e) => {
    
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3000/filehash", data)
      .then((res) => console.log(res));

    //Interact with contracts
    var web3 = new Web3(
     "http://localhost:7545"
    );
    let accounts;
	await web3.eth.getAccounts().then(inst=>{
   accounts=inst[0];
  });
	    

	console.log(accounts);
	console.log(web3);
	let OrganizationList = new web3.eth.Contract(orgApi.abi,"0xB378B38Aaa8C3992133873931d655aDDb169469e")
    let OrganizationA;
	console.log(OrganizationList);
    // OrganizationList.at("0xB378B38Aaa8C3992133873931d655aDDb169469e").then(
    //   (inst) => {
    //     OrganizationA = inst;
    //   }
    // );
	OrganizationList.methods.createOrganization("gogkfddfgdfgsfle","fbfgdfsfdgdfgdfgd","myvfdgfgfdfsfsecrt").send({ from:accounts , gas: '100000', gasPrice: '10000000000000' })
      .then(({reciept})=> {
        console.log(reciept);
      })
      .catch(e => {
		  alert(e);
        console.log(e);
      });

//     web3.eth.defaultAccount = web3.eth.accounts[0];
// 	let orglist;
// 	web3.eth.Contract(orgApi,"0xB378B38Aaa8C3992133873931d655aDDb169469e").then(insta=>{

// 	 orglist = insta;
//     var OrganizationA;
//     orglist.at("0xB378B38Aaa8C3992133873931d655aDDb169469e").then(
//       (inst) => {
//         OrganizationA = inst;
// 		OrganizationA.createOrganization("google","fbid","mysecret",{from:'0x72b7F0163E042a0845432A4c00B3c86d2B380096'});
//       }
//     );
//   })
	
	
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
