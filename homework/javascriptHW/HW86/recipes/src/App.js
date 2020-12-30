import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
// import BulletLessList from './BulletLessList';
import ClickCounter from './ClickCounter';

export default class App extends Component {
  /*
  state = {
    recipes: [
      {
        id: 1,
        name: 'hard boiled eggs',
        ingredients: ['eggs', 'water', 'salt'],
        directions: ['boil water', 'add eggs', 'salt to taste']
      },
      {
        id: 2,
        name: 'steak',
        ingredients: ['steak', 'barbeque sauce'],
        directions: ['marinate steak', 'grill for 8 minutes']
      }
    ]
  };*/

  constructor(props) {
    super(props);

    const recipes = [
      {
        id: 1,
        name: 'hard boiled eggs',
        ingredients: ['eggs', 'water', 'salt'],
        directions: ['boil water', 'add eggs', 'salt to taste'],
        picture: 'https://hips.hearstapps.com/delish/assets/18/08/1519321899-hard-boiled-eggs-horizontal.jpg'
      },
      {
        id: 2,
        name: 'steak',
        ingredients: ['steak', 'barbeque sauce'],
        directions: ['marinate steak', 'grill for 8 minutes'],
        picture: 'https://www.omahasteaks.com/gifs/990x594/prfm7a.jpg'
      }
    ];

    this.state = {
      recipes: recipes,
      selectedRecipe: recipes[0]
    };
  }

  //recipeSelected = () => {
  recipeSelected(recipe) {
    console.log('recipe selected', recipe);
    this.setState({ selectedRecipe: recipe });
  }

  render() {
    // recipe list should probably be own component - not for today though
    const recipeList = (
      <ul className="bulletlessList">
        { this.state.recipes.map(r => (
          <li key={r.id} onClick={
            /*this.recipeSelected*/
            /*() => this.recipeSelected(r)*/
            this.recipeSelected.bind(this, r)
          }>
            {r.name}
          </li>))}
      </ul >
    );

    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        <hr />
        { recipeList}
        {/*<BulletLessList list={this.state.recipes}/>*/}
        <hr />
        <RecipeDetails recipe={this.state.selectedRecipe} />
        <hr />
        <ClickCounter />
      </div>
    );
  }
}