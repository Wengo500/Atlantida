import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Forum from '../pages/Forum';
import Contacts from '../pages/Contacts';
const Main = (props) =>{
    
 const mainClasses = ['main'];
      if(props.store.getState().dark === true) mainClasses.push("main-dark");
    return (
      <Switch>
        <main className={mainClasses.join(' ')}>
          <Route exact path="/portfolio" name="Portfolio" render={() => <Portfolio />} />
          <Route exact path="/forum" name="forum" render={() => 
            <Forum store={props.store} />}
          />
          <Route exact path="/contact" name="Contact" render={() => <Contacts />} />
          <Route exact path="/" name="Home" render={() => <Home />} />
          <Route exact path="/Atlantida" name="Home" render={() => <Home />} />
        </main>
      </Switch>
    )
  
};

export default Main