import ProyectosJSON from "../../Assets/Proyectos.json"
import Proyecto from "../Proyecto/Proyecto"
import "./Proyectos.css"

import imagenProyecto1 from "../../Assets/imagenProyecto1.png";
import imagenProyecto2 from "../../Assets/imagenProyecto2.png"
import imagenProyecto3 from "../../Assets/imagenProyecto3.png"
import imagenProyecto4 from "../../Assets/imagenProyecto4.png"
const imageMap = {
    "imagenProyecto1.png": imagenProyecto1,
    "imagenProyecto2.jepg": imagenProyecto2,
    "imagenProyecto3.png": imagenProyecto3,
    "imagenProyecto4.png": imagenProyecto4
};


const Proyectos = () => {
    return (
        <div id="proyectos" className="divProyectos">
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