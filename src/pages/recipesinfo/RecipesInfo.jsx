import React from 'react'
import { Link } from "react-router-dom";
import "./recipesInfo.scss"

const RecipesInfo = () => {
  return (
    <div className="recipes-info-section">
      <div className="image-container">
        <Link to="/Recipes">
          <img src="/src/assets/recipe.png" alt="Click to view recipes"/>
        </Link>
      </div>
      <div className="text-container">
        <h1>Recipes</h1>
        <p>Discover the colorful and delicious world of jelly bean-inspired recipes!
          Whether you’re looking to bake, create fun desserts, or add a pop of sweetness to your everyday treats, we’ve got you covered.
          From cookies bursting with jelly beans to vibrant cakes and creative snacks, our recipes are designed to bring joy and a splash of color to your kitchen.
          Perfect for parties, family gatherings, or just a sweet indulgence at home, these ideas are sure to spark your creativity.
          Browse through our collection and find your next jelly bean masterpiece today! Click the image to find your next favorite recipe!</p>
      </div>
    </div>
  );
};

export default RecipesInfo;