import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return(
        <div className='pantalla-modal' style={{display: props.display}}>
            <div className='contenedor-modal'>
            <div className='contenido-modal'>La operación no pudo realizarse</div>
            <div className='boton-modal' onClick={props.clic}>Aceptar</div>
        </div>
        </div>
    )
};

export default Modal;