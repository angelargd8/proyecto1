//import React from 'react'
import './styles/style.css'
import useApi from './useApi';

function GetInfo() {

    const fetchFunc = async () => {
        let info = await fetch('http://127.0.0.1:3010/posts/info');
        let laInfo = await info.json();
        return laInfo;
      };
    
      const { data, loading, error } = useApi(fetchFunc);
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


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