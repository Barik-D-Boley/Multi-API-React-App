import React, { useState } from 'react';
import RecipeDNE from './RecipeDNE';
import axios from 'axios';

function joinInput(input) {
    if (input.length === 0) return 'None';
    else if (input.length === 1) return input;
    else if (input.length > 1) return input.join(', '); 
}

function RecipeCards(recipes) {
    const [recipeName, setRecipeName] = useState('');
    const [allIngredients, setAllIngredients] = useState('');

    console.log(recipes);

    if (recipes.recipes.data.to === 0) return <RecipeDNE />
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
                    <h3 className='label'>{label}</h3>
                    <p className='calories'>{Math.round(calories/10)*10} calories</p>
                    <p>{servings} servings</p>
                    <p className='ingredients'>Ingredients: <br />{ingredientLines.splice(0, 3).join(', ')}</p>
                    <button onClick={() => {
                        console.log('Hallo');
                        setRecipeName(label);
                        setAllIngredients(ingredientLines.join(', '));
                    }}>Read More ...</button>


                    
                    <p className='cookTime'>{totalTime} minutes</p>
                    <p className='cautions'>Cautions: {joinInput(cautions)}</p>
                    <button className='submitBtn' onClick={() => webSearch(label)}>Recipe Link</button>
                </div>
            </div>
        )
    }
    return (
        <div id='allRecipes'>
            {stuff}
            <div>
                <h1>{recipeName}</h1>
                <p>{allIngredients}</p>
            </div>
        </div>
    )
}

export default RecipeCards