import { Routes, Route } from 'react-router-dom';
import Contenido from './contenido';
import PostData from './postInfo';
import Login from './login';
import DeletePost from './deletePost';
import UpdatePost from './updatePost';

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
            <Route path="/update" element={<UpdatePost />} />

        </Routes>
    )
    
}
export default AppRouter;