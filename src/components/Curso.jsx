import {useState} from "react";

function Curso(props) {
    const [interesados, setInteresados]= useState(0)
    const [inscritos, setInscritos] = useState(0)
    function Bienvenida(){
        alert(`¡Bienvenido al curso de ${props.nombre}!`);
    }
    function inscrito(){
        alert(`te inscribiste con exito en ${props.nombre}!`);
        setInscritos(inscritos +1 )
    }
    function agregarInteresados(){
        setInteresados(interesados +1 )
    }
    
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.description}</p>
            <button onClick = {Bienvenida}>Bienvenida</button>
            <p></p>
            <button onClick = {inscrito}>inscribirse</button>
            <p>inscritos: {inscritos}</p>
            <p></p>
            <button onClick = {agregarInteresados}>estoy interesado</button>
            <p>interesados: {interesados}</p>
        </div>
    );
}

export default Curso;