import CardEducacion from "../CardEducacion/CardEducacion"
import Cursos from "../../Assets/Educacion.json"
import "./Educacion.css"


const Educacion = () => {
    return (
        <div id="educacion" className="divEducacion">
            <h2 className="tituloEducacion">Educación</h2>
            {Cursos.map((curso, i) => {
                let clase
                let linea
                i % 2 === 0 ? clase = "izquierda" : clase = "derecha"
                i !== 0 ? linea = "linea" : linea = null
                return (
                    <>
                        <div className={linea}></div>
                        <CardEducacion titulo={curso.titulo} subtitulo={curso.subtitulo} descripcion={curso.descripcion} clase={clase} />
                    </>
                )
            })}
        </div>
    )
}

export default Educacion