import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Context/CartContext';
import Formulario from './components/Formulario/Formulario';




function App() {
  return (
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a la pagina del más grande!!!'/>}/> {/*Este es el home*/}
          <Route path="/categoria/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path= {"/cart"} element ={<Cart/>}/>
          <Route path= {"/formulario"} element ={<Formulario/>}/>
          <Route path='*' element= {<Error/>}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
  );
}

export default App;
