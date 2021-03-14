import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import {connect} from 'react-redux';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Forum from '../pages/Forum';
import Contacts from '../pages/Contacts';
import ScrollToTop from './ScrollToTop';


const Main = (state) =>{
    
 const mainClasses = ['main'];
      if(state.colorThem === true) mainClasses.push("main-dark");
    return (
      <main className={mainClasses.join(' ')}>
        <ScrollToTop />
        <Switch>
            <Route exact path="/portfolio" name="Portfolio" render={() => <Portfolio />} />
            <Route exact path="/forum" name="forum" render={() => 
              <Forum/>}
            />
            <Route exact path="/contact" name="Contact" render={() => <Contacts />} />
            <Route exact path="/" name="Home" render={() => <Home />} />
            <Route exact path="/Atlantida" name="Home" render={() => <Home />} />
        </Switch>
      </main>

    )
  
};

const mapStateToProps = (state) => {
  return {
    burger: state.burger,
    colorThem: state.dark
  }
}


export default connect(mapStateToProps, null)(Main);