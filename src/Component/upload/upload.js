import React, { Component } from 'react'

const ipfsAPI = require('ipfs-api')

class UploadIPFS extends Component {
    constructor () {
      super()
      this.state = {
        added_file_hash: null
      }
      this.ipfsApi = ipfsAPI('localhost', '5001')
    }
  
    captureFile = (event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      let reader = new window.FileReader()
      reader.onloadend = () => this.saveToIpfs(reader)
      reader.readAsArrayBuffer(file)
    }
  
    saveToIpfs = (reader) => {
      let ipfsId
      const buffer = Buffer.from(reader.result)
      this.ipfsApi.add(buffer)
      .then((response) => {
        console.log(response)
        ipfsId = response[0].hash
        console.log(ipfsId)
        this.setState({added_file_hash: ipfsId})
      }).catch((err) => {
        console.error(err)
      })
    }
  
    arrayBufferToString = (arrayBuffer) => {
      return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer))
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
    }
  
    render () {
      return (
        <div>
          <form id="captureMedia" onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.captureFile} />
          </form>
          <div>
            <a target="_blank"
              href={'https://ipfs.io/ipfs/' + this.state.added_file_hash}>
              {this.state.added_file_hash}
            </a>
          </div>
        </div>
      )
    }
  }

export default UploadIPFS;