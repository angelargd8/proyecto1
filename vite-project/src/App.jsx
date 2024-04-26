
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './componentes/footer'
import Navbar from './componentes/navbar';
import AppRouter from './componentes/router';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="contenedor">
        <AppRouter/>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
