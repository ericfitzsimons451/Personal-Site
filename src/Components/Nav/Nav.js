import React, { Component } from 'react'
import './Nav.scss'

export class Nav extends Component {

  selectView = (event) => {
    this.props.setCurrentView(event.target.value)
  }

  render() {
    return (
      <div className="nav">
        <div className="button-div">
          <button type="submit" onClick={this.selectView} value="About Me">About</button>
        </div>
        <div className="button-div">
          <button type="submit" onClick={this.selectView} value="Projects">Projects</button>
        </div>
        <div className="button-div">
          <button type="submit" onClick={this.selectView} value="Contact">Contact</button>
        </div>
      </div>
    )
  }
}

export default Nav