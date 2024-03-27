
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer'
import IndexPage from '../src/pages/IndexPage'
import About from '../src/pages/About'
import Gallary from '../src/pages/Gallary'
import Home from './pages/Home';

function App() {
  return (
    <div className='w-full overflow-hidden'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/gallery' element={<Gallary />} />
      <Route path='/footer' element={<Footer />} />
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
