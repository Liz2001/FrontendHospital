import { Link } from 'react-router-dom'
const CitasMedico = (props) => {

    return <div className="col-lg-6">

                <div className="row g-3 align-items-center">
                    <div className="col-lg">
                        <div className="card mb-2" style={{ maxWidth: 400 }} >
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src="/persona.png" className="img-fluid rounded-start" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`pelicula_${props.info.initdate}`}</h5>
                                        <p className="card-text">8:00 consulta virtual</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="btn-group-vertical">
                        <Link className=" btn btn-success" to={"/Mcitas_proximas/info"}>Ver contenido</Link>
                            
                            <div>

                            </div>
                            <a href="#" className="btn btn-success " >Recordar</a>
                        </div>
                    </div>
                </div>
            </div>
}
export default CitasMedico