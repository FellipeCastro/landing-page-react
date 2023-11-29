import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

import Home from '../src/components/pages/Home';
import Sobre from '../src/components/pages/Sobre';
import Cursos from '../src/components/pages/Cursos';
import Contato from '../src/components/pages/Contato';

function App() {
  
  return (
    <div>
        <Router>
          <Header/>
          <Container>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/cursos" element={<Cursos/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
          </Container>
          <Footer/>
        </Router>
    </div>
  )
}

export default App
