import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/Home"}>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to={"/Mperfil"}>Mi perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/CALENDARIO"}>Calendario</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link" to={"/Mconsultas"}>Preguntas</Link>
                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to={"/Mcitas_proximas"}>Citas proximas</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active"  to={"/ConHist"}>Historial</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        </div>
    )
}
export default Navbar