import './styles/login.css'
import { useNavigate } from 'react-router-dom';
//import React from 'react'
import { useForm } from 'react-hook-form';

function Login(){
    const navigate = useNavigate();
    //const [username, setUsername] = React.useState('')
    //const [password, setPassword] = React.useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();



    async function handleLogin(data) {
      const { username, password } = data;
  
      if(username.trim() === '' || password.trim() === '' ){
        alert('Ingrese un usuario y contraseña válidos');
        return;
      }
  
      const response  = await fetch('http://uwu-guate.site:3010/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      let user = await response.json();
  
      let rol = user[0].rol;
      
      localStorage.setItem('sessionId', rol);
      alert('Bienvenido ' + user[0].username);
      navigate("/home");
    }

    return (
        <>
        <div className="login body">
          <form onSubmit={handleSubmit(handleLogin)}>
          <div className="formulario">
              <h1 className='form-text'>Inicia sesión</h1>
                <input type="username"  placeholder="username" className="inputs"  {...register("username", { required: true })} />
                {errors.username && <p>Este campo es requerido</p>}
                <input type="password" className="inputs" placeholder="Contraseña" {...register("password", { required: true })} />
                {errors.password && <p>Este campo es requerido</p>}
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