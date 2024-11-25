import React from "react";
import '../estilos/Boton.css';

function Boton(props){
    return(
        <div className="boton" onClick={() => props.manejarClic(props.children)} >
            {props.children}
        </div>
    )
}

export default Boton;