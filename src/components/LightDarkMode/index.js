// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  renderFunc = () => {
    this.setState(previousState => ({isDarkMode: !previousState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const mode = isDarkMode ? 'light-mode' : 'dark-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="cg-con">
        <div className={`bg-con ${mode}`}>
          <h1 className="head">Click to Change Mode</h1>
          <button className="but" type="button" onClick={this.renderFunc}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
