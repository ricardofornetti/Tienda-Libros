
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';





const App = () => {
  
  return (
    
    <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path='/'element={<ItemListConteiner/>}/>
          <Route path='/category/:id' element={<ItemListConteiner/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      
        
        
      
    </BrowserRouter>
    /**
     <>
      <Navbar>
      <CartWidget/> 
      </Navbar>
      <ItemListConteiner saludo="Hola Mundo Coder"/>
      <ItemDetailContainer></ItemDetailContainer>
      </>
     */
      
  );
}

export default App;
