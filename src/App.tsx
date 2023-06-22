import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Encontros } from './pages/Encontros/Encontros';
import { Parceiro } from './pages/Parceiro/Parceiro';
import { Calendario } from './pages/Calendario/Calendario';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/encontros' element={<Encontros />} />
            <Route path='/parceiro' element={<Parceiro />} />
            <Route path='/calendario' element={<Calendario />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>

  );
}

export default App;
