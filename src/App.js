import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/layout/Navigation';
import Slide from './components/layout/Hero';
import Footer from './components/layout/Footer';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Slide />}></Route>
        <Route path='/projects' element={<Portfolio />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
