import React from 'react'
import "./Navbar.css"
import logo from "../../logo.svg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="navbar logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li><a className="navbar__link active" href="/">home</a></li>
        <li><a className="navbar__link" href="/">about</a></li>
        <li><a className="navbar__link" href="/">tours</a></li>
      </ul>
    </nav>
  )
}
export default Navbar
