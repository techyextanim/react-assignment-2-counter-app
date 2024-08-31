import React, { useState } from 'react';

const Counter = () => {

  const [count,setcount]=useState(0)
  const increament=()=>{
    setcount((count)=>count+1)
  };

 
    const decrement=()=>{
      setcount((count)=>count-1)
  };

 
    const reset=()=>{
      setcount((count*0))
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increament} disabled={count===5?true:false}>+</button>
          <button className="btn card__btn" onClick={decrement} disabled={count===0?true:false}>-</button>
          <button className="btn card__btn" onClick={reset}>0</button>
        </div>
      </div>
    </div>
  );
};

  
export default Counter;
