import React, { Component } from 'react'
import './Nav.scss'

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  selectView = (event) => {
    this.props.setCurrentView(event.target.value)
  }

  render() {
    return (
      <div class="nav">
        <button type="submit" onClick={this.selectView} value="About Me">About Me</button>
        <button type="submit" onClick={this.selectView} value="Projects">Projects</button>
        <button type="submit" onClick={this.selectView} value="Contact">Contact</button>
      </div>
    )
  }
}

export default Nav