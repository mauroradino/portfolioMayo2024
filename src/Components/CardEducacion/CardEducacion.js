import "./CardEducacion.css"


const CardEducacion = ({ titulo, subtitulo, descripcion, clase }) => {
    return (
        <div className={` divCardEducacion ${clase}`}>
            <h3 className="tituloCardEducacion">{titulo}</h3>
            <h4 className="subtituloCardEducacion">{subtitulo}</h4>
            <p className="descripcionCardEducacion">{descripcion}</p>
        </div>
    )
}

export default CardEducacion