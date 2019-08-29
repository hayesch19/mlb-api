import React from 'react'
import MLBLogo from '../images/mlb-logo.png'

const Header = () => {
  return (
    <header>
      <img className="header-img" src={MLBLogo} alt="MLB" />
    </header>
  )
}

export default Header
