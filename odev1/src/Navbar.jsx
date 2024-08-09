import React from 'react'
import logo from './assets/ty.jpg'

export default function Navbar(props) {
  return (
    <nav style={{ backgroundColor: "darkgray", width: "100%", padding: "10px 20px", display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ height: "50px", verticalAlign: "middle" }} />
      <h1 style={{ color: "darkblue", marginLeft: "10px" }}>{props.title}</h1>
    </nav>
  )
}
