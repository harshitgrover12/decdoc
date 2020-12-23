import React, { Component } from 'react'
import './SignIn.css';
import axios from 'axios';
import ipfs from '../ipfs/ipfs.js';
class SignIn extends Component {
    constructor(props){
        super(props);
    this.state={
            active:false,
            ipfsHash:null,
            buffer:null
    }
    }
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
   console.log(this.state.selectedFile);
        const file = event.target.files[0];
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader) 
  };
 
 
//   componentDidMount=()=>{
//       console.log(this.props);
//   }
 
    handleChange=(e)=>{
      
        this.setState({
          [e.target.id]:e.target.value
        })
      
    }
     handleLoginSubmit=(e)=>{
       e.preventDefault();
        
       
       
        
 
axios.post('https://mysterious-temple-37666.herokuapp.com/api/auth/signin', {
    username: this.state.username,
    password:this.state.password,
    
  })
  .then(({data})=>{
         axios({
    method: "POST",
    url: `https://mysterious-temple-37666.herokuapp.com/returnUserDetails`,
    data: {
        username:this.state.username
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      
    },
  }).then(({data})=>this.props.changeuserdata(data))
this.props.changelogin(true);
this.props.history.push('/dash');
   
  }).catch((err)=>{
      alert(err);
  });
    
    
     
    }
    handleRegisterSubmit=async(e)=>{
   
   
  e.preventDefault();
  if(!this.props.user_role)
  {
const data=await ipfs.add(this.state.buffer);
       this.setState({
           ipfsHash:data.path
       })
       const options = {
  headers: {'Content-Type': 'multipart/form-data'}
};
var formData = new FormData();

formData.append("image", this.state.selectedFile);
formData.append("name", this.state.fullname);
formData.append("dob", this.state.dob);

       axios.post('http://127.0.0.1:5000/getAdhar',formData,{options}).then((res)=>{console.log(res)
       
        if(res.data.data===1)
        {
          alert('details verified')
            axios.post('https://mysterious-temple-37666.herokuapp.com/api/auth/signup', {
    organizationName:this.state.organizationname,
    email: this.state.email,
    username:this.state.username,
    password:this.state.password,
    isOrg:this.props.user_role
  })
  .then(({data})=> {
    this.props.changeuserid(data.userData._id);
    
    
  //    organizationlist.methods.createUser("1234","Harshit","secret").send({ from:account})
  //     .then(({reciept})=> {
  //       console.log(reciept);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   }
  // }).catch((err)=>alert(err));
  if(this.props.user_role)
  {
    this.props.history.push('/createOrganization');
  }
  else
  {
    this.props.history.push('/createUser');
  }

  }).catch((err)=>alert(err));   
        }
        else
        alert('details not verified')
       });
  }
  else
  {
    axios.post('https://mysterious-temple-37666.herokuapp.com/api/auth/signup', {
    organizationName:this.state.organizationname,
    email: this.state.email,
    username:this.state.username,
    password:this.state.password,
    isOrg:this.props.user_role
  })
  .then(({data})=> {
    this.props.changeuserid(data.userData._id);
  if(this.props.user_role)
  {
    this.props.history.push('/createOrganization');
  }
  else
  {
    this.props.history.push('/createUser');
  }

  }).catch((err)=>alert(err));   
  }
       

     

    
  }
    
    handleLoginClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:true
            });
        }
        handleRegisterClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:false
            });
        }
    render() {
        
        return (
              <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      
        <div className="card card0 border-0">
                    <div className="row d-flex">

            <div className="col-lg-6">
              <div className="card1 ">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                {this.state.active?(
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                ):
                (<h6 className="mb-0 mr-4 mt-2">Register with</h6>)
                }
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook" />
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter" />
                  </div>
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin" />
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" /> <small className="or text-center">Or</small>
                  <div className="line" />
                </div>
                {this.state.active?(
                    <div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Username</h6>
                  </label> <input className="mb-4" id="username" type="text" name="username" placeholder="Enter your username" ref={(input)=>this.username=input} onChange={this.handleChange}/> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input id="password" type="password" name="password" placeholder="Enter password" ref={(input)=>this.password=input}onChange={this.handleChange} /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleLoginSubmit}>Login</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger " onClick={this.handleRegisterClick}>Register</a></small> </div>
              </div>):
              ( <div>
             
              {
                this.props.user_role?(
                  <div>
                  <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Organization Name </h6>
                  </label> <input className="mb-4" id="organizationname" type="text" name="organizationname" placeholder="Enter your username" ref={(input)=>this.organizationname=input} onChange={this.handleChange}/> </div>
                  </div>
                ):
                (<div/>)
              }
              {
                !this.props.user_role?(
              <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Fullname</h6>
                  </label> <input className="mb-4" id="fullname" type="text" name="fullname" placeholder="Enter your Fullname" ref={(input)=>this.fullname=input} onChange={this.handleChange}/> </div>):(<div/>)}
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Username</h6>
                  </label> <input className="mb-4" id="username" type="text" name="username" placeholder="Enter your username" ref={(input)=>this.username=input} onChange={this.handleChange}/> </div>
                {
                !this.props.user_role?(
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">DOB</h6>
                  </label> <input className="mb-4" id="dob" type="text" name="dob" placeholder="Enter DOB as dd/mm/yyyy" ref={(input)=>this.dob=input} onChange={this.handleChange}/> </div>
                ):(<div/>)}
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label> <input id="email" className="mb-4" type="text" name="email" placeholder="Enter a valid email address" ref={(input)=>this.email=input} onChange={this.handleChange} /> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input id="password" type="password" name="password" placeholder="Enter password" ref={(input)=>this.password=input} onChange={this.handleChange} /> </div>
                   {
                !this.props.user_role?(
                   <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Enter Your Adhar Card </h6>
                  </label> <input id="file" type="file" name="file"  onChange={this.onFileChange} /> </div>
                ):(<div/>)}
                  
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> 
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-primary btn-lg" onClick={this.handleRegisterSubmit}>Register</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a className="text-danger" onClick={this.handleLoginClick}>Login</a></small> </div>
              </div>)}
              </div>
            </div>
          </div>
         
        </div>
      </div>
        )
    }
}
export default SignIn;
