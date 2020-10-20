import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import PhotosBoard from './containers/PhotosBoard'
import Button from '@material-ui/core/Button';
import Albums from './containers/Albums';
import Posts from './containers/Posts'


function App() {

  return (
    <div className="App">
      <h1>My application</h1>
      <div className='container'>
        <div className='Menu'>
          <NavLink activeClassName='active' to='/' exact> <Button variant="contained">Main Page</Button> </NavLink>
          <NavLink activeClassName='active' to='/albums' exact> <Button variant="contained">Albums</Button> </NavLink>
          <NavLink activeClassName='active' to='/posts' exact> <Button variant="contained">Posts</Button> </NavLink>
        </div>
        <div className='ShowWindow'>
          <Switch>
            <Route path='/' exact>
              <div>Main Page</div>
            </Route>
            <Route path='/albums' exact>
              <Albums />
            </Route>
            <Route path='/posts'>
              <Posts />
            </Route>
            <Route path='/albums/:albumid' component={PhotosBoard} />
          </Switch>
        </div>

      </div>

    </div>
  );
}

export default App;
