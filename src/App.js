import React,{useState} from 'react';
import './App.css';
import Buttons from './Components/Buttons';
// import addCommas from './Components/Comma';

function App() {
  const [value,setValue]=useState(0);
  const [memory,setMemory]=useState(null);
  const [operator,setOperator]=useState(null);
  
  const onHandleClick=content=>()=>{
    const num=(parseFloat(value));
    if(content==="AC"){
      setValue("0");
      setMemory(null)
      return;
    }
    if(content==="±"){
      setValue((num * -1));
      return;
    }
    if(content==="%"){
      setValue((num / 100));
      return;
    }
    if(content==="+"){
      setMemory(memory + parseFloat(value));
      setValue("0");
      setOperator("+");
      return;
    }
    if(content==="-"){
      setMemory(memory + parseFloat(value));
      setValue("0");
      setOperator("-");
      return;
    }
    if(content==="/"){
      setMemory(memory + parseFloat(value));
      setValue("0");
      setOperator("/");
      return;
    }
    if(content==="*"){
      setMemory(memory + parseFloat(value));
      setValue("0");
      setOperator("*");
      return;
    }
    if(content==="."){
      setValue(num + ".");
      return;
    }
    if(value[value.length-1]==="."){
      setValue(value + content);
      return;
    }
    if(content==="="){
      if(!operator) return;
        if(operator==="+"){
          setValue((memory + num));
        }
        if(operator==="+"){
          setValue((memory + num));
        }
        else if(operator==="-"){
          setValue((memory - num));
        }
        else if(operator==="/"){
          setValue((memory / num));
        }
        else if(operator==="*"){
          setValue((memory * num));
        }
        setMemory(null);
        setOperator(null);
      return;
    }
    setValue(parseFloat(num+content));
  };
  return (
    <div className="App">
      <div className="display">{value}</div>
      <div className="Button">
      <Buttons onButtonClick={onHandleClick} contents="AC" type="function"/>
      <Buttons onButtonClick={onHandleClick} contents="±" type="function"/>
      <Buttons onButtonClick={onHandleClick} contents="%" type="function"/>
      <Buttons onButtonClick={onHandleClick} contents="/" type="operator"/>
      <Buttons onButtonClick={onHandleClick} contents="7"/>
      <Buttons onButtonClick={onHandleClick} contents="8"/>
      <Buttons onButtonClick={onHandleClick} contents="9"/>
      <Buttons onButtonClick={onHandleClick} contents="*" type="operator"/>
      <Buttons onButtonClick={onHandleClick} contents="4"/>
      <Buttons onButtonClick={onHandleClick} contents="5"/>
      <Buttons onButtonClick={onHandleClick} contents="6"/>
      <Buttons onButtonClick={onHandleClick} contents="-" type="operator"/>
      <Buttons onButtonClick={onHandleClick} contents="1"/>
      <Buttons onButtonClick={onHandleClick} contents="2"/>
      <Buttons onButtonClick={onHandleClick} contents="3"/>
      <Buttons onButtonClick={onHandleClick} contents="+" type="operator"/>
      <Buttons onButtonClick={onHandleClick} contents="0"/>
      <Buttons onButtonClick={onHandleClick} contents="."/>
      <Buttons onButtonClick={onHandleClick} contents="=" type="operator"/>
      </div>
    </div>
  );
}

export default App;
