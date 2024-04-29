import React from 'react'
import './styles/post.css'
import { useNavigate } from 'react-router-dom';
function PostData() {
    //navegacion
    const navigate = useNavigate();
    //get rol
    const userRol = localStorage.getItem('sessionId');
    //sets variables
    const [posts, setPost] = React.useState([])
    const [funcion, setFuncion] = React.useState('')
    const [informacion, setInformacion] = React.useState('')

    //verificar el rol de usuario
    React.useEffect(() => {
        if(userRol === null){
            navigate("/login");
        }
    }, [userRol, navigate]);

    async function handleSubmit(event){
        event.preventDefault()

        if(funcion.trim() === '' || informacion.trim() === '' ){
            alert('Ingrese un título, contenido, descripción e imagen válidos')
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5173/posts/p', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({funcion, informacion})
            })
    
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
    
            const newPost = await response.json()
            setPost(newPost)
            console.log(newPost)
            console.log(posts)
            alert('Post creado')
            navigate("/home");
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al crear el post');
        }
    
    }


    return(
    <div className="basep">
        {userRol === 'admin' && (
        <div className='formulario'>
            <form onSubmit={handleSubmit} >
                <div className="info">
                    <label>
                        Función:
                    </label>
                    <input className='input' type="text" value={funcion} onChange={e => setFuncion(e.target.value)} />
                </div>
                <div className="info">                
                    <label>
                        Información:
                    </label>
                    <textarea className='input' value={informacion} onChange={e => setInformacion(e.target.value)} />
                </div>
               
                <div className="div">
                <button className='boton' type="submit">Enviar</button>
                </div>           
                
            </form>
        </div>
        )}
    </div>
    
    )
} 
export default PostData;