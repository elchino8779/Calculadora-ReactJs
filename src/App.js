import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Modal from './componentes/Modal';
import imagenAtras from './img/arrow-bar-left.svg';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val)
  };

  const calcularResultado = () => {

    if (input) {
      try {
        setInput(evaluate(input))
      } catch (error) {
        setVisibilidad('flex');
        setBlur('blur(10px)')
      };
    };
  }

  const [visibilidad, setVisibilidad] = useState('none');
  const [blur, setBlur] = useState('blur(0px)')

  const volverAtras = () => {

    try {
      let resultArray = input.split('');
      resultArray.pop();
      resultArray = resultArray.join('');
      setInput(resultArray);
    } catch (error) {
      setVisibilidad('flex');
      setBlur('blur(10px)')
    }


  };


  return (
    <div className='App'>

      <Modal display={visibilidad} clic={() => { setVisibilidad('none', setBlur('blur(0px)')) }} />

      <div className='contenedor-calculadora' style={{ filter: blur }}>

        <Pantalla input={input} />
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
        <Boton manejarClic={volverAtras}><img className='imagen-atras' src={imagenAtras} alt="atras" /></Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
