import './App.css';
import Navigation from './components/Navigation/Navigation';
import Slide from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Slide />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
