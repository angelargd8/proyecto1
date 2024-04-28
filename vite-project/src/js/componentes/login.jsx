import './styles/login.css'
import { useNavigate } from 'react-router-dom';
import React from 'react'

function Login(){
    const navigate = useNavigate();
    const [data, setData] = React.useState([])
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    async function handleLogin(event){
      event.preventDefault()
      if(username.trim() === '' || password.trim() === '' ){
        alert('Ingrese un usuario y contraseña válidos')
        return;
    }

      const response  = await fetch('http://127.0.0.1:5173/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      
      })
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      let user = await response.json()
      setData(user)
      navigate("/home");
      console.log(user, data);
    }

    return (
        <>
        <div className="login body">
          <form onSubmit={handleLogin}>
          <div className="formulario">
              <h1 className='form-text'>Inicia sesión</h1>
                <input type="username"  placeholder="username" className="inputs"  value={username} onChange={e => setUsername(e.target.value)} />
                
                <input type="password" className="inputs" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                
                <div className="boton">
                  <button className= "btn" type="submit">
                    Iniciar sesión
                  </button>
                </div>
                     
        
          </div>
          </form>
        </div>
        </>
      )
}
export default Login;