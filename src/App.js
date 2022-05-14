
import './App.css';
import Navbar from './Navbar';

const App = () => {
  let esc = "coder"
  return (
    <div className="App">
      <Navbar></Navbar>      
      Hola Mundo somos {esc}
    </div>
  );
}

export default App;
