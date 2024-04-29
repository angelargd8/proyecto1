import React from 'react'
import './styles/style.css'
function GetInfo() {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)


    async function llamarAPI(){
        let info = await fetch('http://127.0.0.1:5173/posts/info')
        let laInfo = await info.json()
        //console.log(laInfo);
        setData(laInfo)
        setLoading(false) 
    }

     //reaccionar a un cambio
     React.useEffect(() => {llamarAPI()}, []);

    return(
    <div className="info">
        <br></br>
        {loading ? (
            <div className="spinner"></div> 
        ) : (
            <ul>
                {data.map( elemento => {
    if (elemento.imagen == ""){                        
        return(
            <div key={elemento.id} className="info2">
                <h3>{elemento.title}</h3>
                <p>{elemento.content}</p>
            </div>
        );                       

    }else{
        if (elemento.id ==4){
            return(
                <div key={elemento.id} className="info2">
                    <h3>{elemento.title}</h3>
                    <p>{elemento.content}</p>
                    <img src={elemento.imagen} alt="imagen"  height="400"></img>
                    <p>{elemento.descripcion}</p>
                </div>
            );
        }else{
            return(
                <div key={elemento.id} className="info2">
                    <h3>{elemento.title}</h3>
                    <p>{elemento.content}</p>
                    <img src={elemento.imagen} alt="imagen"  height="500"></img>
                </div>
            );
        }
    }
})}

            </ul>
        )}

            
    </div>
    )
} 
export default GetInfo;