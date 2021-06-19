import React from 'react'
import CoinsItem from './CoinsItem'

const CoinsList = (props) => {
    let coind = 0;

    props.list.forEach(l => {
        if(l.name === props.coin) coind = l;
    })

    return (
       
        <div class = "list-group">
            {props.list.map(l => {
                return <CoinsItem key = {l.id} obj = {l} coin = {coind}/>
            })}

            
        </div>
    
    )
}

export default CoinsList
