import React from 'react'
import './styles/post.css'
import { useNavigate } from 'react-router-dom';
function PostInfo() {
    //navegacion
    const navigate = useNavigate();
    //get rol
    const userRol = localStorage.getItem('sessionId');
    //sets variables
    const [posts, setPost] = React.useState([])
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [imagen, setImagen] = React.useState('')

    //verificar el rol de usuario
    React.useEffect(() => {
        if(userRol === null){
            navigate("/login");
        }
    }, [userRol, navigate]);


    async function handleSubmit(event){
        event.preventDefault()

        if(title.trim() === '' || content.trim() === '' ){
            alert('Ingrese un título, contenido, descripción e imagen válidos')
            return;
        }

        try {
            const response = await fetch('http://uwu-guate.site:3010/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, content, descripcion, imagen})
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
                        Título:
                    </label>
                    <input className='input' type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="info">                
                    <label>
                        Contenido:
                    </label>
                    <textarea className='input' value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <div className="info">
                    <label>
                        Descripción:
                    </label>
                    <textarea className='input' value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </div>
                <div className="info">
                    <label>
                        Imagen:
                    </label>
                    <input className='input' type="text" value={imagen} onChange={e => setImagen(e.target.value)} />
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
export default PostInfo;