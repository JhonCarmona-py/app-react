import images from '../assets/img/images.png';
import './Header.css';

function Header() {
return (
    <header className="header">
         <div className="header-content">
            <h1>Centro Nacional Colombo-aleman</h1>
            <p>Comprometidos con la formacion</p>
        </div>

         <div className="header-logo">
            <img src={images} alt="Logo Sena" />
         </div> 
    </header>
    
);
}
export default Header;
