import React from 'react'
import { useState } from 'react';
import ButtonType_1 from './Parts/ButtonType_1';
import './Counter.css';

export default function Counter() {
  const [count, setCount] =useState(0);

  function Decrease(){
    if(count>0){
      setCount(count-1);
    }else{
      setCount(0);
    }

  }
  function Increase(){
    setCount(count+1);
  }
  function Reset(){
    setCount(0);
  }
  return (
    <div>
      <h1>COUNTER</h1>

        <div class="Structure">
          
          <p>The count is :</p>
          <input type="text" value={count} readOnly/>
          <br></br>
          <div className='counter_buttons'>
            <ButtonType_1 name="Decrease" onClick={Decrease}/>
            <ButtonType_1 name="Reset" onClick={Reset}/>
            <ButtonType_1 name="Increase" onClick={Increase}/>
          </div>
        </div>

    </div>
  )
}
