import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/CssComponents/itemListContainer.css';
import './components/CssComponents/navBar.css';
import './components/CssComponents/cartWidget.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CarWidget/CartWidget';


function App() {
  return (
        <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a la pagina del más grande!!!'/>}/> {/*Este es el home*/}
          <Route path="/categoria/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path= {"/carrito"} element ={<CartWidget/>}/>
          <Route path='*' element= {<Error/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
