import React, { useState} from "react";

const Input = (props) => {
  const list = props.list;
  
  const [val , setVal] = useState();
  const [inValid, setInvalid] = useState();
  const submitHandler = (e) => {
      e.preventDefault();
      let ok = 0;
      list.forEach(l => {
          console.log(l.name.toLowerCase() === val.toLowerCase())
          if(l.name.toLowerCase() === val.toLowerCase()){
              console.log("YOY")
              ok = l.name;
              console.log(l.name);
          }
      })
      console.log(ok)
      if(ok === 0){
        setInvalid('has-error')
      }
      else props.onSubmit(ok);
  }

  const changeHandler = (e) => {
    setVal(e.target.value);
  }

  


  return (
    <React.Fragment>
      {list && <React.Fragment>
      <div className="container-sm">
        <form onSubmit = {submitHandler} className = {`${inValid}`}> 
          <div className="input-group mb-3">
            
            <input
              value = {val}
              type="text"
              className={`form-control ${inValid}`}
              id="example"
              aria-describedby="emailHelp"
              placeholder="Start typing..."
              onChange = {changeHandler}
              list = "datalistOptions"
            />
            
         
          <datalist id="datalistOptions">
            {list.map((l) => (
              <option key = {l.name} value={l.name} />
            ))}
          </datalist>
          <div className = " input-group-append">
          <button type="submit" className="btn btn-primary" style = {{backgroundColor : "orange" , color: "white"}}>
            Start
          </button>
          </div>
          </div>
        </form>
      </div>
    </React.Fragment>}
    </React.Fragment>)

  
};

export default Input;
