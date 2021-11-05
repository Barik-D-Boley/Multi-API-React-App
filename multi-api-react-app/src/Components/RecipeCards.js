import React from 'react';

function RecipeCards(recipes) {
    recipes = recipes.recipes.data.hits;
    console.log('In RecipeCards', recipes);
    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        const { image, label, calories, ingredientLines, totalTime, cautions } = recipes[i].recipe;
        stuff.push(  
            <div className='recipeContainer' key={i}>
                <img src={image} alt={label} />
                <p>{label}</p>
                <p>{calories}</p>
                <p>{ingredientLines}</p>
                <p>{totalTime}</p>
                <p>{cautions}</p>
                <button></button>
            </div>
        )
    }
    return stuff
}

export default RecipeCards