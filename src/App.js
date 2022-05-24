
import './App.css';
import Navbar from './componentes/Navbar';
import CartWidget from './componentes/CartWidget';
import ItemListConteiner from './componentes/ItemListConteiner';




const App = () => {
  
  return (
    
      <>
      <Navbar>
      <CartWidget/> 
      </Navbar>
      <ItemListConteiner saludo="Hola Mundo Coder"/>
      </>
  );
}

export default App;
