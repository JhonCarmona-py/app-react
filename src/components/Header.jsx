import images from '../assets/img/images.png';

function Header() {
return (
    <header style={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#03ef36',
        }}>
         <div style={{alignItems: 'center', justifyContent: 'center', marginRight: 'auto'}}>
            <h1 style={{margin: '10px', color: '#000000'}}>Centro Nacional Colombo-aleman</h1>
            <p style={{margin: '10px', color: '#000000'}}>Comprometidos con la formacion</p>
        </div>

         <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto'}}>
            <img src={images} alt="Logo Sena" style={{width: '100px', height: '100px', mixBlendMode: 'multiply'}} />
         </div> 
    </header>
    
);
}
export default Header;
