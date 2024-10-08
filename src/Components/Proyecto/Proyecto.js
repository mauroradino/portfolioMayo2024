import "./Proyecto.css"


const Proyecto = ({ imagen, titulo, subtitulo, enlace }) => {
    return (
        <div className="divProyecto">
            <img className="imagenProyecto" src={imagen} alt="imagen del proyecto" />
            <div className="textosProyecto">
                <p className="tituloProyecto">{titulo}</p>
                <p className="subtituloProyecto">{subtitulo}</p>
                <button onClick={() => window.open(enlace, '_blank')} className="verBtn">Ver</button>
            </div>
        </div>
    )
}

export default Proyecto