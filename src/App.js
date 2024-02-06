import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import {HashRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom'

function App() {
  return (
<>
<Router>
<Navbar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
<Footer />
</Router>
</>
  );
}

export default App;
