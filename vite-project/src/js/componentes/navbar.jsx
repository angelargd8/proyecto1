import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/navbar.css'
//import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    //const location = useLocation();
    const userRol = localStorage.getItem('sessionId');

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

    const handleNewPost2 = () => {
        navigate("/postdata");
    };

    const handleDeletePost = () => {
        navigate("/delete");
    };

    const handleUpdatePost = () => {
        navigate("/update");
    };

    return(
        <>
        <div className=" navbar-body">
        <nav className="navbar navbar-expand-lg">

            <div className="container-fluid">
            <a className="navbar-brand nav-text textnav" href="/home" onClick={handleHome}>Blog </a>   
            </div>
            {userRol ===null && location.pathname !== '/login' &&(
                <div className="iniciosesion">
                    <button type="button" className="btn"  onClick={handleLogin}>Iniciar Sesión</button>
                </div>
            )}
            
            {
                location.pathname === '/login' &&(
                <div className="regresar">
                    <button type="button" className="btn"  onClick={handleHome}>regresar</button>
                </div>
                )
            }

            {userRol ==='admin' &&(
                <div className="admin">
                    <button type="button" className="btn"  onClick={handleNewPost}>agregar post</button>
                    <button type="button" className="btn"  onClick={handleNewPost2}>agregar info</button>
                    <button type="button" className="btn"  onClick={handleUpdatePost}>actualizar post</button>
                    <button type="button" className="btn"  onClick={handleDeletePost}>borrar post</button>
                    <button type="button" className="btn"  onClick={handleLogOut}>cerrar sesión</button>
                </div>
            )}
            
        </nav>
        </div>
        </>
    )
}
export default Navbar;