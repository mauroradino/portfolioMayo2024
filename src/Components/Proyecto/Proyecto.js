import "./Proyecto.css"


const Proyecto = ({ imagen, titulo, subtitulo, enlace }) => {
    return (
        <a style={{ textDecoration: "none" }} href={enlace} target="_blank" rel="noreferrer">
            <div className="divProyecto">
                <img className="imagenProyecto" src={imagen} alt="imagen del proyecto" />
                <div className="textosProyecto">
                    <p className="tituloProyecto">{titulo}</p>
                    <p className="subtituloProyecto">{subtitulo}</p>
                </div>
            </div>
        </a>
    )
}

export default Proyecto