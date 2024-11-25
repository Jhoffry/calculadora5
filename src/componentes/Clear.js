import React from "react";
import '../estilos/Clear.css';

function Clear(props){
    return(
      <div className="clear" onClick={props.manejarClic}>
        {props.children}
      </div>
    );
}

export default Clear;