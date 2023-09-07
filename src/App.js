import './App.css';
import './css/button.css'
import './css/screen.css'
import './css/clearButton.css'
import Paulaalbilogo from './images/logo-paw-albi.svg' 
import Button from './components/button'
import Screen from './components/screen'
import Clear from './components/clearButton'
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {


  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  
  };

  const resultCalculator = ()=> {

    if (input) {
    setInput(evaluate(input));
    } 
    
    else { alert('you need a value')}

  }

  return (
    <div className='App'>
   
   
    <div className='calculator-container'>
        <Screen input={input} />
      <div className='row'>
        <Button  manejarClic={agregarInput}>1</Button>
        <Button  manejarClic={agregarInput}>2</Button>
        <Button  manejarClic={agregarInput}>3</Button>
        <Button  manejarClic={agregarInput}>+</Button>
  
      </div> 
    <div className='row'>
      <Button  manejarClic={agregarInput} >4</Button>
      <Button manejarClic={agregarInput} >5</Button>
      <Button manejarClic={agregarInput} >6</Button>
      <Button  manejarClic={agregarInput} >-</Button>
      </div> 
    <div className='row'>
      <Button  manejarClic={agregarInput} >7</Button>
      <Button  manejarClic={agregarInput} >8</Button>
      <Button  manejarClic={agregarInput} >9</Button>
      <Button manejarClic={agregarInput} >*</Button></div> 
    <div className='row'>
      <Button  manejarClic={resultCalculator} >=</Button>
      <Button  manejarClic={agregarInput} >0</Button>
      <Button  manejarClic={agregarInput} >.</Button>
      <Button  manejarClic={agregarInput} >/</Button></div> 
    <div className='rowClear' > 
    
    <Clear manejarClear={()=> setInput(' ')} > clear </Clear>   </div>



     </div>
    </ div>
  );
}

export default App;
