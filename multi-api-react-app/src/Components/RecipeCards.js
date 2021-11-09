import React from 'react';

function RecipeCards(recipes, website) {
    console.log('Website Link', website);
    recipes = recipes.recipes.data.hits;
    console.log('In RecipeCards', recipes);
    let stuff = [];
    for (let i = 0; i < recipes.length; i++) {
        const { image, label, calories, yield: servings, ingredientLines, totalTime, cautions } = recipes[i].recipe;
        stuff.push(  
            <div className='recipeContainer' key={i}>
                <img className='recipeImg' src={image} alt={label} />
                <div className='textContainer'>
                    <p className='label'>{label}</p>
                    <p className='calories'>{Math.round(calories/10)*10} calories</p>
                    <p>{servings} servings</p>
                    <p className='ingredients'>{ingredientLines}</p>
                    <p className='cookTime'>{totalTime} minutes</p>
                    <p className='cautions'>Cautions: {cautions}</p>
                    {/* <button className='sheetsBtn' onClick={() => googleSearch(label)}>Google Search</button> */}
                    <a href={website} target='_blank'>Recipe Link</a>
                </div>
            </div>
        )
    }
    return stuff
}

export default RecipeCards