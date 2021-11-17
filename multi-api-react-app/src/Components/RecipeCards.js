import React from 'react';
import axios from 'axios';

function RecipeCards(recipes) {
    function webSearch(recipeName) {
        const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
        params: {
            q: `${recipeName}`,
            pageNumber: '1',
            pageSize: '1',
            autoCorrect: 'false'
        },
        headers: {
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
        }
        };

        axios.request(options).then(function (response) {
            window.open(response.data.value[0].url)
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    recipes = recipes.recipes.data.hits;
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
                    <button onClick={() => webSearch(label)}>Recipe Link</button>
                </div>
            </div>
        )
    }
    return stuff
}

export default RecipeCards