import './App.css';
import React, { Component } from 'react';
// import RecipeDetails from './RecipeDetails3';
import Blogs from './users';
import Posts from './posts';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/posts/:userId">
            <Posts />
          </Route>
          
          <Redirect to="/blogs" />
        </Switch>

      </div>
    );
  }
}