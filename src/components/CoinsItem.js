import React, {useEffect, useState} from "react";

import "./CoinsItem.css";

const CoinsItem = (props) => {
  let colo = null;
  console.log(props.coin)
  const [width , setWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    function handleResize() {
      console.log('aaa')
      setWidth(window.innerWidth);
    }
    console.log("width" , width);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  } )
  

  function convert(labelValue) {
    // Nine Zeroes for Billions
    return  Math.abs(Number(labelValue)) >= 1.0e12
    ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(1) + "T"
    :
    Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
      : Math.abs(Number(labelValue.toFixed(2)));
  }

  let s = props.obj.symbol.toUpperCase();
  let ss = props.coin.symbol.toUpperCase();
  let potential_price = props.obj.market_cap / props.coin.market_cap;
  potential_price *= props.coin.current_price;
  if(potential_price > props.coin.current_price) colo = 'green';
  else if(potential_price < props.coin.current_price) colo = 'red';
  let upside = ((potential_price - props.coin.current_price) / props.coin.current_price);
  potential_price = convert(potential_price);
  
  upside *= 100;
  upside = upside.toFixed(0);

  if(upside >= 1000 || upside <= -1000){
      upside = upside / 100;
      upside = upside.toFixed(0);
      upside += 'x';
  }
  else upside += '%';
  console.log('u' , upside)
  console.log("c" , colo);
  return (
    <div className={width <= 900 ? "container-xl" : "container-sm"}>
      <div
        className="card mb-1 mx-4 fll"
        style={{  marginTop: "20px" }}
      >
        <div className= {width <= 900 ? "column" : "row"}>
          <div className="col-md-2 mb-3 d-flex align-items-center justify-content-center boxy">
            <img
              src={props.obj.image}
              className=".mx-auto d-block imggg"
              alt="..."
            />
          </div>
        
            <div className="card-body">
              <h5 className= "card-title" id="hhh">
              <span className="text-muted">{`#${props.obj.market_cap_rank}`}</span>&nbsp;
                <strong>{props.obj.name}</strong> {`(${s})`}
              </h5>
              <p className="card-text d-inline ppp text-align-left"><span className="text-muted">Market Cap: &nbsp; &nbsp;  </span> <strong>₹{convert(props.obj.market_cap)}</strong><br></br></p>
              <p className="card-text d-inline ppp"><span className="text-muted">Current Price: &nbsp;  </span><strong>₹{convert(props.obj.current_price)}</strong><br></br></p>
                <p className="card-text d-inline ppp">&nbsp;</p>
            </div>
          
       
          
          
         
          </div>

          <div className={width <= 900 ? "column" : "row"}>
          
         
            <div className="card-body">
              <h5 className="card-title" id="hhh">
                <span className="text-muted">{`#${props.coin.market_cap_rank}`}</span> &nbsp;
                <strong>{props.coin.name}</strong> {`(${ss})`}
              </h5>
              <p className="card-text d-inline ppp text-align-left"><span className="text-muted">Current Price: &nbsp; &nbsp;   </span> <strong>₹{convert(props.coin.current_price)}</strong><br></br></p>
              <p className="card-text ppp d-inline text-align-left"><span className="text-muted">Potential Price: </span><strong>₹{potential_price}</strong><br></br></p>
              <p className="card-text ppp d-inline text-align-left"><span className="text-muted">Potential Upside: </span><strong className = {`${colo}`}>{upside}</strong></p>
             
            </div>
            <div className="col-md-2 mb-3 d-flex align-items-center justify-content-center boxyy">
            <img
              
              src={props.coin.image}
              className=".mx-auto d-block imggg"
              alt="..."
            />
          </div>
          
     
       
          
          
         
          </div>
        
            </div>

           
         
          
        </div>
       
    
  );
};

export default CoinsItem;
