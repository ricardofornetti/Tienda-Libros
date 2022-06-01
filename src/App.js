
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import CartWidget from './componentes/CartWidget';
import ItemListConteiner from './componentes/ItemListConteiner';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  
  return (
    
    <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path='/'element={<ItemListConteiner/>}/>
          <Route path='/category/:id' element={<ItemListConteiner/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
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
