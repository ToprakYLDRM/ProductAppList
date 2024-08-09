import React from 'react'

export default function Menu(props) {
    return (
        <ul style={{
            listStyleType: "none",
            padding: 0,
            backgroundColor: "darkblue",
            color: "yellow",
            height: "100vh", // Menü boyunu footer'a kadar uzatır
            margin: 0
        }}>
            {props.items.map((item, index) => (
                <li key={index} style={{ padding: "10px", borderBottom: "1px solid white" }}>
                    {item}
                </li>
            ))}
        </ul>
    )
}
