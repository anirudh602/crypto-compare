import React from 'react'
import CoinsItem from './CoinsItem'

const CoinsList = (props) => {
    let coind = 0;

    props.list.forEach(l => {
        if(l.name === props.coin) coind = l;
    })

    return (
       
        <ul style = {{margin:"auto"}}>
            {props.list.map(l => {
                return <CoinsItem key = {l.id} obj = {l} coin = {coind}/>
            })}

            
        </ul>
    
    )
}

export default CoinsList
