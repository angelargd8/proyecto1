import React from 'react'
import './styles/post.css'
function PostData() {
    const userRol = localStorage.getItem('sessionId');
    
    const [posts, setPost] = React.useState([])
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [imagen, setImagen] = React.useState('')


    async function handleSubmit(event){
        event.preventDefault()

        if(title.trim() === '' || content.trim() === '' ){
            alert('Ingrese un título, contenido, descripción e imagen válidos')
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5173/posts', {
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
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al crear el post');
        }
    
    }


    return(
    <div className="base">
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
export default PostData;