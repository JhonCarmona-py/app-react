import { useState } from "react";
function PresentacionAprendiz (){
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState("");
    const[mensaje,setMensaje] = useState("");

    function manejarenvio(evento){
        evento.preventDefault();
        if (nombre.trim() === "" || curso.trim() === ""){
            alert("Por favor, completa todos los campos");
            return;
        }
        alert(`Hola ${nombre}, te interesa aprender ${curso}`);
        setNombre("");
        setCurso("");
    }

    return(
        <div>
            <h2>Mi presentacion</h2>

            <label htmlFor = "nombrePresentacion">Escribe tu nombre: </label>
            <input
              id = "NombrePresentacion"
              type = "text"
              value = {nombre}
              onChange = {(evento) => setNombre (evento.target.value)}
              placeholder = "Ejemplo: Jhon"
            />
            <br/>
            <br/>

            <label htmlFor="cursoPresentacion">¿que curso te interesa?</label>

            <input
             id = "NombrePresentacion"
              type = "text"
              value = {curso}
              onChange = {(evento)=>setCurso(evento.target.value)}
              placeholder = "Ejemplo: Desarrollo web"
            />
            <p></p>

            <button onClick = {manejarenvio}>enviar formulario</button>

        </div>
    );
}
export default PresentacionAprendiz;