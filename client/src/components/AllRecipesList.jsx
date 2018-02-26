import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';
import recipeObj from '../../../database-mongo/RecipeListData.js';

var AllRecipesList = (props) => {
  return (
    <div>
      <h3>All Recipes </h3>
      {console.log(props.recipeList)}
        {props.recipeList.map((recipe) =>
          <ul>
            <RecipeEntry recipe={recipe}
            onRecipeClick = {props.onRecipeClick}
            />
          </ul>
        )}
    </div>
  );
}

export default AllRecipesList;