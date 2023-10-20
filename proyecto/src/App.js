import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './CssComponents/itemListContainer.css';
import './CssComponents/navBar.css';
import './CssComponents/cartWidget.css';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting={'Bienvenidos a la pagina del más grande!!!'}/>
      </main>
    </div>
  );
}

export default App;
