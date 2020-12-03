import React, { Component } from 'react'
import ipfs from  '../ipfs/ipfs.js';
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
            
                <form action="/">
        <fieldset>
            <legend>Upload photo</legend>
            <input type="file" name="photo" id="photo" onChange={this.onFileChange}></input>
            <button type="button" onClick={this.handleSubmit}>Upload</button>
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

        )
    }
}
export default Upload1;
