import './styles/update.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
function UpdatePost(){
    //navegacion
    const navigate = useNavigate();
    //sets variables
    const userRol = localStorage.getItem('sessionId');
    const [id, setId] = React.useState('')
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

        if(id.trim() === '' ){
            alert('Ingrese un id válido')
            return;
        }

        try {
            const response = await fetch(`http://uwu-guate.site:3010/post/update/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, content, descripcion, imagen})
            })
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            alert('Post actualizado')
            navigate("/home");
    }catch (error){
        console.error('Error:', error);
        alert('Ocurrió un error al actualizar el post');
    }
    }
    return(
        <div className="baseupdate">
            {userRol === 'admin' && (
            <div className='formulario'>
                <form onSubmit={handleSubmit} >
                    <div className="info">
                        <label>
                            ID:
                        </label>
                        <input className='input' type="text" value={id} onChange={e => setId(e.target.value)} />
                    </div>
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
                        <textarea className='input' type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </div>
                    <div className="info">
                        <label>
                            Imagen:
                        </label>
                        <input className='input' type="text" value={imagen} onChange={e => setImagen(e.target.value)} />
                    </div>
                    <button type="submit" className='boton'>Actualizar</button>
                </form>
            </div>
            )}
        </div>
    )

}
export default UpdatePost;