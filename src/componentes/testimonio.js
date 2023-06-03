import React from 'react';
import '../stylesheets/testimonio.css';

/*Define function Testimonio*/
function Testimonio(props) {
    return (        
        <div className='contenedor-testimonio'>
            {/*Renders Image "Contenedor-testimonio"*/}
            <img
                className='imagen-testimonio'
                src={require(`../imagenes/${props.imagen}-perfil.jpg`)}
                alt={props.alt}/>
            {/*Define container for "Nombre", "Cargo", "Texto" */}
            <div className='contenedor-texto-testimonio'>
                {/*Renders "nombre-testimonio" */}
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> de {props.aldea}</p>
                {/*Renders cargo-testimonio */}
                <p className='cargo-testimonio'>
                    {props.cargo} de <strong>{props.organizacion}</strong></p>
                {/*Renders texto-testimonio */}
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;