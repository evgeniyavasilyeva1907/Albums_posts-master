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
import Post_comment from './containers/Post_comment'


function App() {

  return (
    <div className="App">
      <div className='Menu'>
        <NavLink activeClassName='active' to='/' exact> <Button variant="contained">Main Page</Button> </NavLink>
        <NavLink activeClassName='active' to='/albums' exact> <Button variant="contained">Albums</Button> </NavLink>
        <NavLink activeClassName='active' to='/posts' exact> <Button variant="contained">Posts</Button> </NavLink>
      </div>
      <h1>My application</h1>
      <div className='container'>

        <div className='ShowWindow'>
          <Switch>
            <Route path='/' exact>
              <div>Provide application that gives option to work with posts, albums and photos.
              As server need to use<a href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com/ </a>
              All application should provide option to display/update/delete/add photos.
              Use User material design framework.
              Posts, display list of posts + search.
              When user clicks on every items - the next page should display info about post + list of comments.
              The same is for albums and photos - for every album display list of photos.
              User will have option to make comment under post.
              For every albums you should display list of photos, every photo should be displayed as popup.
For posts and albums you need to provide statitics: display information as charts</div>
            </Route>
            <Route path='/albums' exact>
              <Albums />
            </Route>
            <Route path='/posts' exact>
              <Posts />
            </Route>
            <Route path='/albums/:albumid' component={PhotosBoard} />
            <Route path='/posts/:postid' component={Post_comment} />
          </Switch>
        </div>

      </div>

    </div>
  );
}

export default App;
