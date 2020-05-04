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
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header id='header' />

          <main>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/addart' component={AddArt} />
          </main>

        </Router>
      </AuthProvider>
      <Footer />

    </div>
  );
}

export default App;
