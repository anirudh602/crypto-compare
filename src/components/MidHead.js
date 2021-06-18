import React from 'react'
import './MidHead.css'
const MidHead = (props) => {
    
    let s = `Now lets compare ${props.coin} with other coins`
    console.log(s);
    return (
        <div className = "text-center container">
            <hr/>
            <br></br>
            <h2 id = "mhead">{s}</h2>
            <br></br>
        </div>
    )
}

export default MidHead
