// Write your code here
import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {msg: 'Please Login', status: 'Login'}

  change = () => {
    const {status} = this.state

    if (status === 'Login') {
      this.setState(() => ({msg: 'Welcome User', status: 'Logout'}))
    } else {
      this.setState(() => ({msg: 'Please Login', status: 'Login'}))
    }
  }

  render() {
    const {status, msg} = this.state

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">{msg}</h1>
          <button className="button" type="button" onClick={this.change}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
