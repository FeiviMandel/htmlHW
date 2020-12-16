import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';
import React, { Component } from 'react';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'cholent',
        recipeDetails: {
          name: 'cholent',
          ingredients: 'ingredients: meat, beans, barley, potatoes',
          instructions: 'Mix ingredients together.'
        }
      },
      {
        id: 2,
        name: 'challah',
        recipeDetails: {
          name: 'challah',
          ingredients: 'ingredients: flour, water, yeast, sugar, oil, eggs',
          instructions: 'Mix ingredients together.'
        }
      }
    ]
  };

  getRecipes() {
    return this.state.recipes.map((recipe, index) => <Recipe recipe={recipe} key={recipe.id /*index*/} />);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        {this.getRecipes()}
        {<RecipeDetails details={this.state.recipes[0].recipeDetails}></RecipeDetails>}
      </div>
    );
  }
}

export default App;
