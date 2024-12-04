import '../estilos/Boton.css';

function Boton({children, numero, changeNumero}){

    return(
        <div className="boton" onClick={()=> changeNumero(ant => ant + numero)}>
            {children}
        </div>
    )
}

export default Boton; 