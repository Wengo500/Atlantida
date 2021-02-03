import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu'
import './components/styles/burgerMenu.scss' 
import './App.scss';

const App = (props) => {

    return (
      <div className="App">
        <Header store={props.store}/>
        <BurgerMenu store={props.store}/>
        <Main store={props.store} />
        <Footer />
      </div> 
    );
};

export default App
