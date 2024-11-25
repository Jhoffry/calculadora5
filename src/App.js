import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  function agregarInput(valor){
    setInput(input + valor);
  }

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
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <Clear manejarClic={() => setInput("")}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
