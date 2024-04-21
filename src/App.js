import './App.css';
import Navbar from './commponents/navbar'
import Home from './commponents/home'
import Servicios from './commponents/servicios'
import Membresia from './commponents/membresia'
import About from './commponents/about'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <About/>
        <Servicios/>
        <Membresia/>
      </header>
    </div>
  );
}

export default App;
