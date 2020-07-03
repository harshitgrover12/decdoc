import axios from "axios";
import React, { Component } from "react";
import orgApi from "../contracts/OrganizationList.json";
import Web3 from "web3";

const ABI = "";

class FileUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };
    async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    console.log("CURRENT ACCOUNT IS: " + this.state.account);

    const networkId = await web3.eth.net.getId();
    const networkData = orgApi.networks[networkId];
    console.log(networkData.address);
    if (networkData) {
      const OrganizationList = new web3.eth.Contract(orgApi.abi, networkData.address);
      this.setState({ OrganizationList });
      console.log(this.state.OrganizationList);
      this.setState({ GAS: 900000, GAS_PRICE: "20000000000" });
      // const func = await court.methods.func(params).call()
      
    } else {
      window.alert(" contract not deployed to detected network.");
    }
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = async(e) => {
    
    

    //Interact with contracts
     const { account, OrganizationList, GAS, GAS_PRICE } = this.state;
    
    let OrganizationA;
	console.log(OrganizationList);
    // OrganizationList.at("0xB378B38Aaa8C3992133873931d655aDDb169469e").then(
    //   (inst) => {
    //     OrganizationA = inst;
    //   }
    // );
	await OrganizationList.methods.createOrganization("gogkfhfhfghfddfgdfkjkgsfle","fbhgfjlfgdfsfdgdfgdfgd","myvfdgfhfthtfgfdklfsfsecrt").send({ from:account,gasPrice:GAS_PRICE,gas:GAS})
      .then(({reciept})=> {
        console.log(reciept);
      })
      .catch((e) => {
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
