import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './CssComponents/itemListContainer.css';
import './CssComponents/navBar.css';
import './CssComponents/cartWidget.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la pagina del más grande!!!'/>}/> {/*Este es el home*/}
          <Route path="/categoria/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
