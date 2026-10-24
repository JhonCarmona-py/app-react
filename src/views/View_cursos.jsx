import Curso from '../components/Curso.jsx'
function Cursos() {
  return (
    <main id="curso">
      <h2>Nuestros cursos</h2>
      <p>
        Ofrecemos una variedad de cursos para desarrollar tus habilidades.
      </p>

      <div className="contenedor">
        <Curso
          nombre="Desarrollo web"
          description="Aprende a crear paginas web modernas y atractivas"
        />

        <Curso
          nombre="Base de datos"
          description="Aprende a gestionar y manipular base de datos"
        />

        <Curso
          nombre="Inteligencia artificial"
          description="Aprende a desarrollar soluciones basadas en inteligencia artificial"
        />

        <Curso
          nombre="Programacion con Java"
          description="Aprende los conocimientos basicos de Java"
        />

        <Curso
          nombre="Programacion Python"
          description="Aprende a desarrollar soluciones de software con Python"
        />
      </div>
    </main>
  );
}

export default Cursos;