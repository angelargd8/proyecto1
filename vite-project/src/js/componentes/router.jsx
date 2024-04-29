import { Routes, Route } from 'react-router-dom';
import Contenido from './contenido';
import PostInfo from './postInfo';
import Login from './login';
import DeletePost from './deletePost';
import UpdatePost from './updatePost';
import PostData from './postData';

function AppRouter(){

    return (
        <Routes>
            <Route path="/home" element={<Contenido />} />
            <Route path="/" element={<Contenido />} />
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/postinfo" element={<PostInfo />} />
            <Route path="/postdata" element={<PostData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/delete" element={<DeletePost />} />
            <Route path="/update" element={<UpdatePost />} />

        </Routes>
    )
    
}
export default AppRouter;