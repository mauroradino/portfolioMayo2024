import ProyectosJSON from "../../Assets/Proyectos.json"
import Proyecto from "../Proyecto/Proyecto"
import "./Proyectos.css"

import imagenProyecto1 from "../../Assets/imagenProyecto1.png";


const imageMap = {
    "imagenProyecto1.png": imagenProyecto1,
};


const Proyectos = () => {
    return (
        <div className="divProyectos">
            <h2 className="tituloProyectos">Proyectos</h2>
            {ProyectosJSON.map((proyecto) => {
                return (
                    <Proyecto titulo={proyecto.titulo} enlace={proyecto.enlace} subtitulo={proyecto.subtitulo} imagen={imageMap[proyecto.imagen]} />
                )
            })}
        </div>
    )
}

export default Proyectos