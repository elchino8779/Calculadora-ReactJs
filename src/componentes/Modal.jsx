import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return(
        <div className='contenedor-modal' style={{display: props.display}}>
            <div className='contenido-modal'>La operación no pudo realizarse</div>
            <div className='boton-modal' onClick={props.clic}>Aceptar</div>
        </div>
    )
};

export default Modal;