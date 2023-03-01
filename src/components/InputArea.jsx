import React from "react";
import './style.css'


function InputArea(props) {
  const { result, handleClick } = props;
  return (
    <div className="input-box">
        <input type="text" value={result} onChange={(e) => handleClick(e)} />
    </div>
  );
}

export default InputArea;