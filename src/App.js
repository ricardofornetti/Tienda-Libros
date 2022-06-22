
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import {CartProvider} from './context/CartContext';
import FinalizarCompra from './componentes/FinalizarCompra';



const App = () => {
  
  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path='/'element={<ItemListConteiner/>}/>
          <Route path='/category/:id' element={<ItemListConteiner/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<FinalizarCompra/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
