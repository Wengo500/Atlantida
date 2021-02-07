import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu'
import './components/styles/burgerMenu.scss' 
import './App.scss';

const App = (props) => {

    return (
      <div className="App">
        <Header/>
        <BurgerMenu/>
        <Main/>
        <Footer />
      </div> 
    );
};

export default App
