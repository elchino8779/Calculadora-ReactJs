import React from 'react';
import './BotonAtras.css';

const BotonAtras = (props) => {
    return(
        <div className='boton-atras' onClick={() => props.funcion()}> <img className='imagen-atras' src={props.nombre} alt="atras" /></div>
    );
};

export default BotonAtras;