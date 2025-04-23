
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './recipes.scss';

const RecipesDetails = () => {
    const location = useLocation();
    const { recipe } = location.state || {};

    console.log(recipe);

    if (!recipe) {
        return <p>No recipe found. Please go back to the recipes page.</p>;
    }

    return (
        <div className="recipe-page">
            <div className="recipe-details-image">
                <img src={recipe.imageUrl} alt={recipe.name} />
            </div>
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.directions}</p>

            <h3>Tips:</h3>
            <p>{recipe.tips}</p>
        </div>
    );
};

export default RecipesDetails;

