import React from "react";
import '../estilos/Clear.css';

function Clear({children, limpiar, valor}){
    return(
      <div className="clear" onClick={() => limpiar(valor = '')}>
        {children}
      </div>
    );
}

export default Clear;