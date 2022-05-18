
import './App.css';
import Navbar from './componentes/Navbar';
import CartWidget from './componentes/CartWidget';
import ItemListConteiner from './componentes/ItemListConteiner';


const App = () => {
  let esc = "coder"
  return (
    <div className="App">
      <Navbar>
      <CartWidget/> 
      </Navbar>
      <ItemListConteiner greeting="Hola Mundo"/>
      
    </div>
  );
}

export default App;
