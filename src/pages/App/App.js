import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Header from '../../components/Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header id='header' />

      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/about' component={About} />
        </Switch>
      </main>

      <Footer />

    </div>
  );
}

export default App;
