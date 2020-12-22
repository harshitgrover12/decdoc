import React, { Component } from 'react'
import ipfs from '../ipfs/ipfs.js';
import Nav from '../nav/nav';

import './upload1.css';
 class Upload1 extends Component {
     state = {
    // Initially, no file is selected
    selectedFile: null,
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
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    event.preventDefault()
        const file = event.target.files[0];
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader) 
  };
  handleSubmit=async(e)=>{
      e.preventDefault();
    
       const data=await ipfs.add(this.state.buffer);
       this.setState({
           ipfsHash:data.path
       })
       
      


  }
//   componentDidMount=()=>{
//       console.log(this.props);
//   }
  handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
  }
    
    render() {
        
        return (
            <div>
                <Nav {...this.props} />
                <div className="containerdoc justify-content-center center " >
                    <div class="row docpad">
                       <div class="col-xl-12 col-xl-offset-3 center">
                          <form action="/">
                                <fieldset>
                                    <legend>Upload Document</legend>
                                    <div class="row docpad">
                                        <div class="col-xl-12 col-xl-offset-3 center">
                                             <div class="btn-container">
                                                <button type="button" id="btnup" class="btn btn-primary btn-lg">Browse For Your Documents! <i className="fa fa-file fa-1x" /></button>
                                                <input type="file" name="photo" id="photo" onChange={this.onFileChange}></input>
                                             </div>
                                        </div>
                                    </div>

                                    <div class="row docpad">
                                        <div class="col-xl-12 col-xl-offset-3 center">
                                            <div class="btn-container">
                                                <button type="button" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Upload <i className="fa fa-upload fa-1x" /></button>
                                            </div>
                                        </div>
                                    </div>


                                </fieldset>
                          </form>
                        <br/>
                        <br/>
                        {
                           this.state.ipfsHash?(
                            <a id="url"> https://gateway.ipfs.io/ipfs/{this.state.ipfsHash}</a>):(<div/>)
                        }
                        <br/>
                        <br/>
                        <img id="output"></img>
                            
                       </div>
                    </div>
                </div>
          </div>

        )
    }
}
export default Upload1;
