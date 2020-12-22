import React, { Component } from 'react'
import Nav from '../../nav/nav';
import axios from 'axios';
import ipfs from '../../ipfs/ipfs';
import './verify.css';
 class VerifyDocument extends Component {
     state = {
    // Initially, no file is selected
    selectedFile: null,
    status:false,
    afterReq:false,
    ipfsHash:null,
    buffer:null
  };
   convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
    onFileChange = (event) => {
  event.preventDefault();
    this.setState({ selectedFile: event.target.files[0] });
        const file = event.target.files[0];
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader) 
  };
  componentDidMount=()=>{
      console.log(this.props);
  }
  onPublic=(e)=>{
    console.log(this.state.orgName);
        axios.post('https://mysterious-temple-37666.herokuapp.com/returnOrgDetails',{
            orgName:this.state.orgName
        
  }).then((res)=>{
      console.log(res.data);
      this.setState({
        public_key:res.data.public_key,
        afterReq:true
      })
    })
  }
  handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
  }
  onFileUpload=async(e)=>{
const {account,organizationlist,gas,gas_price}=this.props;
 const data = new FormData(); 
    data.append('file', this.state.selectedFile);
    let hash;
    
    let userId;
    let userIndex;
    let orgIndex;
     const hashData=await ipfs.add(this.state.buffer);
     console.log(hashData.path);
       this.setState({
           ipfsHash:hashData.path
       })
		
    await axios.post('https://mysterious-temple-37666.herokuapp.com/documentdetailsfromhash',{public_key:this.state.public_key,hash:this.state.ipfsHash}).then(async res=>{
      console.log(res);
      if(res.data.msg==='Valid file')
      {
      this.setState({
        status:true
      })
      }
      else
      {
        this.setState({
          status:false
        })
      }
      // if(res.data.msg==="Valid file"){
      //   await organizationlist.methods.verifyDocument(res.data.doc.organizationName,res.data.doc.orgIndex,res.data.doc.userIndex,res.data.doc.documentIndex,res.data.doc.documentHash)
      //   .call((err,res)=> {
      //     console.log(res);
      //     if(err){
      //       console.log(err);
      //     }
      //     else if(res){
      //       console.log("Valid File")
      //     }
      //     else{
      //       console.log("Invalid File")
      //     }
      //   })
      // }
      // else{
      //   console.log("Invalid File")
      // }
    })

    // await axios.post('/api/getuser',{
    //   username:this.state.username
    // }).then(({data})=>{
    //   console.log(data);
    //   userIndex=data.userData.userIndex
    //   console.log(data.userData.userIndex);
      

    // }).
    // catch((e)=>alert(e));
    
    // axios.post('/returnOrgIndex',{    //make this api that gives me the org index from organization schema in backend
    //   organizationName:this.props.userdata.organizationName
    // }).then(async(res)=>{
    //   console.log("orgindex ka response",res);
    //   orgIndex=res.data.orgIndex;
    //   console.log(this.props.userdata.organizationName,hash,orgIndex,userIndex,this.state.secret);
    // })
   
    //   .catch((e) => {
    //     console.log('contract me issue'+e);
    //   });
    // }).catch((e)=>{console.log('main error');
    // console.log(e)});
    

    
  
    
  

    
  }
  fileData = () => {
    let ans="not verified"
    if (this.state.selectedFile) {
      if(this.state.status)
      ans="verified"
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
           <p style={{fontWeight:'bold'}}>Authenticity of file:{ans}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose the file to verify</h4>
        </div>
      );
    }
  };
    render() {
        return (
            <div>
                <Nav{...this.props} />
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <ul className="lists">
                                <input type="input" id="orgName"name="orgName" placeholder="Enter Organization To Find Public Key" onChange={this.handleChange} ref={(input)=>this.orgName=input} style={{marginLeft:'30px',width:'500px'}}/>
                                <button style={{ pointer: 'cursor', display: 'inline-block' }} class="btn btn-primary btn-lg" onClick={this.onPublic}>Search <i className="fa fa-search"></i></button>
                                {
                                  this.state.afterReq ?(
                                <textarea class="form-control" id="public_key" rows="9" value={this.state.public_key} ref={(input)=>this.public_key=input}style={{border:'2px solid #e9eaea',width:'900px',marginLeft:'290px'}}></textarea>
                                  ):
                                  (<div/>)
                                }
                                <input type="file" id="fileup" onChange={this.onFileChange} />

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button type="button" id="btnup" class="btn btn-primary btn-lg" style={{ cursor: 'pointer' }}>Browse For Your Documents!<i className="fa fa-file"></i></button>
                                <input type="file" id="fileup" onChange={this.onFileChange} />
                            </div>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
                                <button class="btn btn-primary btn-lg" onClick={this.onFileUpload}>Verify<i className="fa fa-search"></i></button>
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


            /* 
              <div>
                <Nav />
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <ul className="lists">
                                <li className="listsli"><i className="icofont-check-circled listsi" /> User id:{this.state.userid}</li>
                                <li className="listsli"><i className="icofont-check-circled listsi" /> document hash:{this.state.hash}</li>

                            </ul>
                        </div>
                    </div>
                    <div class="row docpad">
                        <div class="col-xl-12 col-xl-offset-3 center">
                            <div class="btn-container">
					            <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse for your Documents!</button>
                                <input type="file" id="fileup" onChange={this.onFileChange}/>
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
             
             
             
             
             
             
             
             
             
             
             
             
             */
           
        ) 
    }
}
export default VerifyDocument;
