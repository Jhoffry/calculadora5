import React from "react";
import '../estilos/Pantalla.css';

function Pantalla(props){
    return(
      <div className="pantalla">
				{props.children}
			</div>
    );
}

export default Pantalla;