import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/navbar.css'
function Navbar(){
    return(
        <>
        <div className="navbar-body">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <a className="navbar-brand nav-text" href="#">Blog </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            </div>
            <div className="iniciosesion">
            <button type="button" className="btn">Iniciar Sesión</button>
            </div>
        </nav>
        </div>
        </>
    )
}
export default Navbar;