import React from 'react';
import { Route } from 'react-router'
import { Home } from './components/Home/Home'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Movies } from './components/Movies/Movies'
import { Series } from './components/Series/Series'


function App() {
  return (
    <React.Fragment>
      <Route path='/' component={NavBar}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route path="/series" component={Series}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path='/' component={Footer}></Route>
    </React.Fragment>
  );
}

export default App;
