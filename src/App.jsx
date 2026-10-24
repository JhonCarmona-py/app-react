import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Cursos from './views/View_cursos.jsx';
import Registro from './views/View_registro.jsx'
import Inicio from './views/View_inicio.jsx'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;