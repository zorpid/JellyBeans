
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './recipes.scss';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://jellybellywikiapi.onrender.com/api/Recipes/?pageIndex=1&pageSize=200';

    // Fetch data from API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return <p>Loading recipes... 🧁</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="recipe-page">
            <h1 className="title">Jelly Beans Recipes</h1>
            <div className="recipe-grid">
                {recipes.items.map((recipe) => (

                    <div className="recipe-card">
                        <Link
                            key={recipe.recipeId}
                            to={`/recipes/${recipe.recipeId}`}
                            state={{ recipe }} // Send recipe data as state
                            className="recipe-link">
                        <div className="recipe-card-image">
                            <img src={recipe.imageUrl} alt={recipe.name} />
                        </div>
                        <div className="recipe-card-content">
                            <h3>{recipe.name}</h3>
                            <p className="recipes-description">{recipe.description}</p><br />
                            <p className="recipes-totaltime">Total time: {recipe.totalTime ? recipe.totalTime : '-'}</p>
                            <p className="recipes-amount">Amount: {recipe.makingAmount}</p>
                        </div>
                    </Link>
                    </div>
                   
                ))}
        </div>
        </div >
    );
};

export default RecipesPage;

