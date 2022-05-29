
import './App.css';
import Navbar from './componentes/Navbar';
import CartWidget from './componentes/CartWidget';
import ItemListConteiner from './componentes/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer';




const App = () => {
  
  return (
    
      <>
      <Navbar>
      <CartWidget/> 
      </Navbar>
      <ItemListConteiner saludo="Hola Mundo Coder"/>
      <ItemDetailContainer></ItemDetailContainer>
      </>
  );
}

export default App;
