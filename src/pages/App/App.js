import React from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
// ---------- PAGES -------------//
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import Login from '../Login/Login';
import AddArt from '../AddArt/AddArt';
// import HoodPage from '../HoodPage/HoodPage';
import CherryCreekTrail from '../Hoods/CherryCreekTrail';
import Downtown from '../Hoods/Downtown';
import SantaFe from '../Hoods/SantaFe';
import RiNo from '../Hoods/RiNo';
//----------- COMPONENTS ----------//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AuthProvider } from '../../Auth/Auth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import analytics from '../../firebase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header id='header' />

          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={600} classNames='fade'>
                <main>
                  <Switch location={location}>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />

                    {/* Neighborhoods */}
                    <Route exact path='/CherryCreekTrail' component={CherryCreekTrail} />
                    <Route exact path='/RiNo' component={RiNo} />
                    <Route exact path='/Downtown' component={Downtown} />
                    <Route exact path='/SantaFe' component={SantaFe} />

                    {/* Admin Area */}
                    <PrivateRoute exact path='/addart' component={AddArt} />
                  </Switch>
                </main>
              </CSSTransition>
            </TransitionGroup>
          )} />

          <Footer />
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
