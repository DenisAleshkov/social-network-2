import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

const  App = () => {
  return (
    <BrowserRouter>
        <div className="app container">
            <Header />
            <div className="app__content">
              <Route path='/profile' component={Profile} />
              <Route path='/messages' component={Dialogs} />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
