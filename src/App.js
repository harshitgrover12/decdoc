import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Routes from './routes';
import orgApi from "./Component/contracts/OrganizationList.json";
import './App.css';
import Web3 from "web3";



class App extends Component {
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
    console.log(networkData);
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
    render() {
        return (
            <div>
               <Routes {...this.props}/> 
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
     isauthenticated:state.isauthenticated,
     user_role:state.user_role,
     account:state.account,
     organizationlist:state.organizationlist,
     gas:state.gas,
     gas_price:state.gas_price,
     userid:state.userid,
     userdata:state.userdata
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changelogin: (isauthenticated) => dispatch({
      type:'LOGIN',
      isauthenticated:isauthenticated
    }),
    changeuserrole:(user_role)=>dispatch({
      type:'ROLE',
      user_role:user_role
    }),
    changeaccount:(account)=>dispatch({
      type:'ACCOUNT',
      account:account
    }),
    changecontract:(organizationlist)=>dispatch({
      type:'CONTRACT',
      organizationlist:organizationlist
    }),
    changegas:(gas,gas_price)=>dispatch({
      type:'GAS',
      gas:gas,
      gas_price:gas_price
    }),
    changeuserid:(userid)=>dispatch({
      type:'USERID',
      userid:userid
    }),
    changeuserdata:(userdata)=>dispatch({
      type:'USERDATA',
      userdata:userdata
    })
    }}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)

  
) (App);
