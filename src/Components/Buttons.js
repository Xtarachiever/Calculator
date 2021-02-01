import React from 'react';

const Buttons=({contents,type,onButtonClick})=>{
    return(
        <div onClick={onButtonClick(contents)} className={`buttons ${contents==="0" ?'zero' : " "} ${type || ""}`}>{contents}</div>
    )
}
export default Buttons;