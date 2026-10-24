function Inicio() {
  function saludar() {
    alert("Bienvenido a nuestro portal de formacion");
  }

  return (
    <main id="inicio">
      <h2>Bienvenido a nuestro portal de formacion</h2>
      <button onClick={saludar}>Bienvenida</button>
    </main>
  );
}
export default Inicio;