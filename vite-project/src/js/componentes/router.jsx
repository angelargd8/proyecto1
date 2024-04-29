import { Routes, Route } from 'react-router-dom';
import Contenido from './contenido';
import PostData from './postInfo';
import Login from './login';
import DeletePost from './deletePost';

//<Route path="/login" element={<Login />} />
//<Route path="/signup" element={<SingUp />} />

function AppRouter(){

    return (
        <Routes>
            <Route path="/home" element={<Contenido />} />
            <Route path="/" element={<Contenido />} />
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/postinfo" element={<PostData />} />
            <Route path="/postdata" element={<PostData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/delete" element={<DeletePost />} />

        </Routes>
    )
    
}
export default AppRouter;