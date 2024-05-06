//import React from 'react'
import './styles/style.css'
import useApi from './useApi';
function GetData() {
    
    const fetchFunc = async () => {
        let info = await fetch('http://127.0.0.1:3010/posts/f');
        let laInfo = await info.json();
        return laInfo;
      };
    
      const { data, loading, error } = useApi(fetchFunc);
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

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