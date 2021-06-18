import React, { useEffect, useState } from "react";

import './CoinInfo.css'

const CoinInfo = (props) => {
  const [curr, setCurr] = useState();

  function convert (labelValue) {

    // Nine Zeroes for Billions
    return  Math.abs(Number(labelValue)) >= 1.0e12
    ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2) + "T"
    :
    Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue.toFixed(2)));

}

  useEffect(() => {
    props.list.forEach((ll) => {
      if (ll.name.toLowerCase() === props.coin.toLowerCase()) setCurr(ll);
    });
  }, [props.coin, props.list]);

  console.log(curr);

  

  return (
    <React.Fragment>
      
      {curr && <div className=" text-center my-3 boxxx container">
        <a href = {`https://coingecko.com/en/coins/${curr.id}`} target="blank  "><img src={curr.image} id = "coin-image" alt ="..."></img>
        <h2 id = "heads">{curr.name}</h2></a>
        <br></br>
        <p id = "ppp">{`${curr.name} has a market cap of `}<strong>₹{convert(curr.market_cap)}</strong> and its current price is <strong>₹{curr.current_price.toLocaleString('en-IN')}</strong></p>
        <p id = "ppp"><a href={`https://coingecko.com/en/coins/${curr.id}`} target="blank">CoinGecko Rank: <strong>#{curr.market_cap_rank}</strong></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Circulating Supply: <strong>₹{convert(curr.circulating_supply)}</strong></p>
      </div>}
    </React.Fragment>
  );
};

export default CoinInfo;
