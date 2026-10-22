import './App.css';
import Header from './components/Header.jsx';
import Curso from './components/Curso.jsx';
import Footer from './components/Footer.jsx'; 
import Navbar from './components/Navbar.jsx';
import Registro_aprendiz from './components/Registro_aprendiz.jsx';
import PresentacionAprendiz from './components/Precentacionaprendiz.jsx';

function App() {
  function saludar(){
    alert("Sapo")
  }

  return (
    <div>
      <Header />

      <Navbar />
      <main id="inicio">
        <h2>Bienvenido a nuestro portal de formacion</h2>
        <button onClick = {saludar}>haz click aqui</button>


        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>ofrecemos una variedad de cursos para desarrollar tus habilidades</p>
          
          <Curso
          nombre = "Desarrollo web"
          description = "aprende a crear paginas web modernas y atractivas"
          />

           <Curso
          nombre = "Base de datos"
          description = "aprende a gestionar y manipular base de datos"
          />

           <Curso
          nombre = "Inteligencia artificial"
          description = "Aprende a desarrollar soluciones basadas en inteligencia artificial"
          />

          <Curso
          nombre = "Programacion con Java"
          description = "Aprende los conocimientos basicos de Java"
          />

          <Curso
          nombre = "Programacion Python"
          description = "Aprende a desarrollar soluciones de software con python"
          />
         

        </section>
        <section id ="contacto">

          <h2>Contactanos</h2>
          <p>Si tienes alguna pregunta o deseas mas informacion, no dudes en contactarnos</p>
        
        </section>

        <Registro_aprendiz/> 
        <PresentacionAprendiz/>
      </main>

      <h2>otros cursos</h2>
      <p>explora mas opciones de aprendizaje en nuestra plataforma</p>
      
      <Footer />
    </div>
    
  )
}

export default App