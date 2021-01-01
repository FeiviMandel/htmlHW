import './RecipeDetails.css';
import React, { useState, useEffect } from 'react'
import BulletLessList from './BulletLessList';
import { useParams, Link } from 'react-router-dom';

export default () => {
  const [imageShowing, setImageShowing] = useState(true);
  const [recipe, setRecipe] = useState();
  const { recipeId } = useParams();
  // const id = `${recipeId}`;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/data/${recipeId}.json`);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const recipe = await response.json();
        setRecipe(recipe);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [recipeId]);

  const togglePicture = () => {
    setImageShowing(!imageShowing);
  }

  function getPictureElem(picture, name) {
    /*return this.state.imageShowing ?
      <img className="img-fluid img-thumbnail img" src={picture} alt={name} /> :
      null;*/
    if (imageShowing) {
      return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
    }
    return null;
  }

  if (!recipe) {
    return null;
  }

  const { name, ingredients, directions, picture } = recipe;
  const text = imageShowing ? 'hide' : 'show';

  return (
    <div>
      <h2>{name}</h2>
      {getPictureElem(picture, name)}
      <br />
      <button onClick={togglePicture}>
        {text} picture
        </button>
      <h3>ingredients</h3>
      <BulletLessList list={ingredients} />
      <h3>directions</h3>
      <BulletLessList list={directions} />
      <Link to='/recipe/1'>Recipe 1</Link>
    </div>
  )
}