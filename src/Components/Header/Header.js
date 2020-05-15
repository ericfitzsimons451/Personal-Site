import React from 'react'
import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <h2>Home</h2>
        <h2>Blog</h2>
      </div>
      <div className="flex-container">
        <div className="personal-info">
          <h1 className="header-name">Eric Fitzsimons</h1>
          <h3 className="job-title">Web Developer</h3>
        </div>
      </div>
    </div>
  )
}

export default Header