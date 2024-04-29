import React from 'react'
import './styles/style.css'
function GetData() {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    async function llamarAPI(){
        let info = await fetch('http://127.0.0.1:5173/posts/f')
        let laInfo = await info.json()
        //console.log(laInfo);
        setData(laInfo)
        setLoading(false) 
    }

     //reaccionar a un cambio
     React.useEffect(() => {llamarAPI()}, []);

    return(
    <div className="data">
        <h1>Las funciones cognitivas:</h1><br></br>
        {loading ? (
            <div className="spinner"></div> 
        ) : (
            <ul>
                {data.map( elemento => {
                    return(
                        <div key={elemento.id}  className="data2">
                            <h3>{elemento.funcion}</h3>
                            <p>{elemento.informacion}</p>
                            <br></br>
                        </div>
                    );
                })}
            </ul>
        )}
    </div>
    )
} 
export default GetData;