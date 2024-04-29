import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/navbar.css'
import { useEffect } from 'react';
//import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    //const location = useLocation();
    const userRol = localStorage.getItem('sessionId');
    useEffect(() => {
        const handleScroll = () => {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //navegacion
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/home");
    };

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogOut = () => {
        localStorage.removeItem('sessionId');
        alert('Sesión cerrada');
        navigate("/home");
    };

    const handleNewPost = () => {
        navigate("/postinfo");
    };

    return(
        <>
        <div className="navbar-body">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <a className="navbar-brand nav-text" href="/home" onClick={handleHome}>Blog </a>            
            </div>
            <div className="iniciosesion">
            <button type="button" className="btn"  onClick={handleLogin}>Iniciar Sesión</button>
            </div>

            {userRol ==='admin' &&(
                <div className="admin">
                <button type="button" className="btn"  onClick={handleNewPost}>agregar post</button>
                <button type="button" className="btn"  /*onClick={handleNewPost}*/>borrar post</button>
                <button type="button" className="btn"  onClick={handleLogOut}>cerrar sesión</button>
                </div>
            )}
            
        </nav>
        </div>
        </>
    )
}
export default Navbar;