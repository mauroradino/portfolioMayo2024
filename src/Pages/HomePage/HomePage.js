import HomeWelcome from "../../Components/HomeWelcome/HomeWelcome"
import Educacion from "../../Components/Educacion/Educacion"
import Habilidad from "../../Components/Habilidad/Habilidad"
import "./HomePage.css"
import Proyectos from "../../Components/Proyectos/Proyectos"


const HomePage = () => {
    return (
        <main>
            <HomeWelcome />
            <Educacion />
            <Habilidad />
            <Proyectos />
        </main>
    )
}

export default HomePage