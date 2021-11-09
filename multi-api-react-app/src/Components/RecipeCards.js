import React, { useState } from 'react';
import axios from 'axios';

function RecipeCards(recipes) {
    const [website, setWebsite] = useState();

    function googleSearch(recipeName) {
        const options = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${recipeName}&num=2&lr=lang_en&hl=en&cr=US`,
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'US',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
        }
        };

        axios.request(options).then(function (response) {
            setWebsite(response.data.results[0].link);
            console.log('Axios', response.data.results[0].link);
        }).catch(function (error) {
            console.error(error);
        });
    }

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
                    <a href={website} target='_blank' onClick={() => googleSearch(label)}>Recipe Link</a>
                </div>
            </div>
        )
    }
    return stuff
}

export default RecipeCards