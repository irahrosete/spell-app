import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navStyles = {
    display: "flex"
  }

  const linkStyles = {
    fontSize: "1.2em",
    textDecoration: "none",
    margin: "0.5em",
  }

  const listStyles = {
    listStyle: "none"
  }

  return (
    <nav style={navStyles}>
      <ul style={listStyles}>
        <li><Link style={linkStyles} to="/">Home</Link></li>
        <li><Link style={linkStyles} to="/spells/new">New Spell</Link></li>
      </ul>
    </nav>
  )
}


export default Nav
