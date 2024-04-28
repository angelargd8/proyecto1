import { Routes, Route } from 'react-router-dom';
import Contenido from './contenido';

//<Route path="/login" element={<Login />} />
//<Route path="/signup" element={<SingUp />} />

function AppRouter(){

    return (
        <Routes>
            <Route path="/home" element={<Contenido />} />
            <Route path="/" element={<Contenido />} />
            <Route path="/contenido" element={<Contenido />} />
        </Routes>
    )
    
}
export default AppRouter;