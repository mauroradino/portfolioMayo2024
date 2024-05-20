import Habilidades from "../../Assets/Habilidad.json"
import "./Habilidad.css"


const Habilidad = () => {
    return (
        <div id="habilidades" className="divHabilidad">
            <h2 className="tituloHabilidades">Habilidades</h2>
            <div className="grupoHabilidades">
                {Habilidades.map((habilidad) => {
                    return (
                        <div className="habilidad">
                            <img className="fotoHabilidad" src={habilidad.imagen} alt="Foto Habilidad" />
                            <div className="textosHabilidad">
                                <h4 className="tituloHabilidad">{habilidad.titulo}</h4>
                                <h5 className="subtituloHabilidad">{habilidad.subtitulo}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Habilidad