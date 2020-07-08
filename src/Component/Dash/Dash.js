import React, { Component } from 'react'
import Nav from '../nav/nav';
import Options from './Options/Options';
import orgApi from "../contracts/OrganizationList.json";
import organizationApi from "../contracts/Organization.json";
import Web3 from "web3";

 class Dash extends Component {
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
    this.props.changeaccount(accounts[0]);

    console.log("CURRENT ACCOUNT IS: " + this.props.account);

    const networkId = await web3.eth.net.getId();
    const networkData = orgApi.networks[networkId];
    alert(networkData.address);
    if (networkData) {
      const OrganizationList = new web3.eth.Contract(orgApi.abi, networkData.address);
      this.props.changecontract(OrganizationList);
      console.log(this.props.OrganizationList);
      this.props.changegas(9000000,"31000000000" )
      
      // const func = await court.methods.func(params).call()
      
    } else {
      window.alert(" contract not deployed to detected network.");
    }
  }
  constructor(props) {
    super(props);
    
  }
    render() {
        
        return (
            <div>
              <Nav/> 
              <Options{...this.props} /> 
              
            </div>
        )
    }
}
export default Dash;
