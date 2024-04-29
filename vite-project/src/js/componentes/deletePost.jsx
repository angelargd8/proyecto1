import React from 'react'
import './styles/delete.css'
function DeletePost(){
    //obtener el rol
    const userRol = localStorage.getItem('sessionId');
    const [id, setId] = React.useState('')

    async function handleDelete(event){
        event.preventDefault()
        if(id.trim() === '' ){
            alert('Ingrese un id válido')
            return;
        }
        try {
            const response = await fetch(`http://127.0.0.1:5173/post/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify({id})
            })
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            alert('Post eliminado')
        }
        catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al eliminar el post');
        }
    }
            
    return (
        <div className="base">
            {userRol === 'admin' && (
                <div className='formulario'>
                    <form onSubmit={handleDelete} >
                        <label>
                            Id del post a eliminar:
                            <input className='input' type="text" value={id} onChange={e => setId(e.target.value)} />
                        </label>
                        <button type="submit" className="boton">Eliminar</button>
                    </form>
                </div>
            )}

        </div>
    )
}

export default DeletePost;