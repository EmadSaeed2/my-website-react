import './App.css';
import Navigation from './components/Navigation/Navigation';
import Slide from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<><Slide />
          <Portfolio /></>}>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
