import './App.css';
import Head from './components/Nav/Head/Head';
import Nav from './components/Nav/Nav/Nav';
import About from './components/Nav/About/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Head />
      <About />
    </div>
  );
}

export default App;
