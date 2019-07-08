import React, { Component } from 'react'
import './Nav.scss'

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  selectAboutMe = () => {
    console.log('hits')
  }

  selectProjects = () => {
    console.log('hits')
  }
  
  selectContact = () => {
    console.log('hits')
  }

  render() {
    return (
      <div class="nav">
        <button type="submit" onClick={this.selectAboutMe}>About Me</button>
        <button type="submit" onClick={this.selectProjects}>Projects</button>
        <button type="submit" onClick={this.selectContact}>Contact</button>
      </div>
    )
  }
}

export default Nav