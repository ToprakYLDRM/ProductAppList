import React from 'react'
import logo from './assets/ty.jpg'

export default function Footer(props) {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "green", color: "white", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <p>Telif Hakkı Saklıdır</p>
      <img src={logo} alt="Logo" style={{ height: "30px", verticalAlign: "middle" }} />
    </footer>
  )
}
