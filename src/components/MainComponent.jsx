import React, { useState } from 'react'
import InputArea from './InputArea'
import ButtonArea from './ButtonArea'
import './style.css'

function MainComponent() {
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText));
  };


  const clear = () => {
    setResult("");
  };

  return (
    <div className='main-box'>
     <InputArea
      result={result} 
      handleClick={handleClick} />

     <ButtonArea
      handleClick={handleClick}
      clear={clear}
      calculate={calculate}
      />
    </div>
  )
}

export default MainComponent