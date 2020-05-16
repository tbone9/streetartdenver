import React from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
// ---------- PAGES -------------//
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import Login from '../Login/Login';
import AddArt from '../AddArt/AddArt';
//----------- COMPONENTS ----------//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AuthProvider } from '../../Auth/Auth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header id='header' />

          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames='fade'>
                <main>
                  <Switch location={location}>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/addart' component={AddArt} />
                  </Switch>
                </main>
              </CSSTransition>
            </TransitionGroup>
          )} />


        </Router>
      </AuthProvider>
      <Footer />

    </div>
  );
}

export default App;
