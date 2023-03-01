import React from 'react'
import './style.css'

function ButtonArea(props) {
  const { handleClick, clear, calculate } = props;

  
  return (
    <div className='button-box'>
      <div className='main-button'>
        <button type="text" onClick={(e) => handleClick(e)}>1</button>
        <button type="text" onClick={(e) => handleClick(e)}>2</button>
        <button type="text" onClick={(e) => handleClick(e)}>3</button>
        <button type="text" onClick={(e) => handleClick(e)}>4</button>
      </div>
      <div className='main-button'>
        <button type="text" onClick={(e) => handleClick(e)}>5</button>
        <button type="text" onClick={(e) => handleClick(e)}>6</button>
        <button type="text" onClick={(e) => handleClick(e)}>7</button>
        <button type="text" onClick={(e) => handleClick(e)}>8</button>
      </div>
      <div className='main-button'>
        <button type="text" onClick={(e) => handleClick(e)}>9</button>
        <button type="text" onClick={(e) => handleClick(e)}>0</button>
        <button type="text" onClick={(e) => clear()}>C</button>
        <button type="text" onClick={() => calculate()}>=</button>
      </div>
      <div className='main-button'>
        <button type="text" onClick={(e) => handleClick(e)}>+</button>
        <button type="text" onClick={(e) => handleClick(e)}>-</button>
        <button type="text" onClick={(e) => handleClick(e)}>*</button>
        <button type="text" onClick={(e) => handleClick(e)}>/</button>
      </div>
    </div>

  )
}

export default ButtonArea