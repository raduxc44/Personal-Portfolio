import './App.css';
import Head from './components/Head/Head';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Head />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
