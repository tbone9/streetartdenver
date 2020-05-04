import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// ---------- PAGES -------------//
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import Login from '../Login/Login';
import AddArt from '../AddArt/AddArt';
//----------- COMPONENTS ----------//
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header id='header' />

      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/addart' component={AddArt} />
        </Switch>
      </main>

      <Footer />

    </div>
  );
}

export default App;
