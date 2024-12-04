import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  function calcular(){
    const regex = /^[+|-]?[0-9]+([.][0-9]+)?[+|-|*|/][0-9]+([.][0-9]+)?$/
    const regex2 = /^[0][+|-]?[0-9]+([.][0-9]+)?[+|-|*|/][0-9]+([.][0-9]+)?$/
    if(regex.test(input)){
      setInput(evaluate(input));
    }
    else if(regex2.test(input)){
      alert("Favor de omitir el 0 que esta delante");
    }
    else{
      alert("Introduzca un calculo válido");
    }
    
  }

  return (
    <div className="App">
      <div className='contenedor'>
        <Pantalla>{input}</Pantalla>
        <div className='fila'>
          <Boton changeNumero={setInput}  numero={1}>1</Boton>
          <Boton changeNumero={setInput}  numero={2}>2</Boton>
          <Boton changeNumero={setInput}  numero={3}>3</Boton>
          <Boton changeNumero={setInput}  numero={'+'} >+</Boton>
        </div>
        <div className='fila'>
          <Boton changeNumero={setInput}  numero={4}>4</Boton>
          <Boton changeNumero={setInput}  numero={5}>5</Boton>
          <Boton changeNumero={setInput}  numero={6}>6</Boton>
          <Boton changeNumero={setInput}  numero={"-"}>-</Boton>
        </div>
        <div className='fila'>
          <Boton changeNumero={setInput}  numero={7}>7</Boton>
          <Boton changeNumero={setInput}  numero={8}>8</Boton>
          <Boton changeNumero={setInput}  numero={9}>9</Boton>
          <Boton changeNumero={setInput}  numero={'*'}>*</Boton>
        </div>
        <div className='fila'>
          <div onClick={calcular} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black',
            flex: 1,
            margin: '3px',
            borderRadius: '20px',
            height: '100px',
            fontSize: '30px',
            userSelect: 'none',
            cursor: 'pointer'
          }}>=</div>
          <Boton changeNumero={setInput}  numero={0}>0</Boton>
          <Boton changeNumero={setInput}  numero={'.'}>.</Boton>
          <Boton changeNumero={setInput}  numero={'/'}>/</Boton>
        </div>
        <Clear limpiar={setInput}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;