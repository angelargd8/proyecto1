import './styles/style.css'
import './getInfo'
import GetInfo from './getInfo';
import GetData from './getData';
function Contenido(){
    return(
    <>
    <center>
            <div>
                <h1 className="titulo">MBTI</h1>
                <p className="subtitulo">Este es un blog dedicado a informar acerca del MBTI, debido a que existe mucha desinformación en internet</p>
            </div>
    </center>  
    <GetInfo/>
    <GetData/>

    </>
    )
}

export default Contenido;