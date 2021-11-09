import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCards from '../Components/RecipeCards';
import LoadingPage from '../Components/LoadingPage';
import ErrorPage from '../Components/ErrorPage';

function Homepage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [recipe, setRecipe] = useState();
    const [website, setWebsite] = useState();
    const [boolean, setBoolean] = useState(false);

    useEffect(() => {setIsLoading(false)}, [])

    function setMealValues() {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${document.getElementById('query').value}&app_id=11ff8d9e&app_key=01250d39e0db773e22ad3860dcbfc9f9&cuisineType=${document.getElementById('cuisines').value}&mealType=${document.getElementById('mealType').value}&random=true`)
        .then(setIsLoading(false))
        .then((response) => {
            setRecipe(response);
            setBoolean(true);
        })
        .catch((error) => {
            console.log(error);
            setIsError(true);
        })
    }

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

    if (isLoading === true) {
        return <LoadingPage />
    }
    if (isError === true) {
        return <ErrorPage />
    }

    return (
        <div>
            <button onClick={() => googleSearch('Pizza')}>Google Search</button>
            <div>
                <input type='text' id='query' name='query' placeholder='Chicken'/>
                <select id='cuisines' name='cuisines'>
                    <option className='defaultOption' value='empty'>Choose a Cuisine Type</option>
                    <option className='formOption' value='American'>American</option>
                    <option className='formOption' value='Asian'>Asian</option>
                    <option className='formOption' value='British'>British</option>
                    <option className='formOption' value='Caribbean'>Caribbean</option>
                    <option className='formOption' value='Central%20Europe'>Central European</option>
                    <option className='formOption' value='Chinese'>Chinese</option>
                    <option className='formOption' value='Eastern%20Europe'>Eastern European</option>
                    <option className='formOption' value='French'>French</option>
                    <option className='formOption' value='Indian'>Indian</option>
                    <option className='formOption' value='Italian'>Italian</option>
                    <option className='formOption' value='Japanese'>Japanese</option>
                    <option className='formOption' value='Kosher'>Kosher</option>
                    <option className='formOption' value='Mediterranean'>Mediterranean</option>
                    <option className='formOption' value='Mexican'>Mexican</option>
                    <option className='formOption' value='Middle%20Eastern'>Middle Eastern</option>
                    <option className='formOption' value='Nordic'>Nordic</option>
                    <option className='formOption' value='South%20American'>South American</option>
                    <option className='formOption' value='South%20East%20Asian'>South East Asian</option>
                </select>
                <select id='mealType' name='mealType'>
                    <option className='defaultOption' value='empty'>Choose a Meal Type</option>
                    <option className='formOption' value='breakfast'>Breakfast</option>
                    <option className='formOption' value='lunch'>Lunch</option>
                    <option className='formOption' value='dinner'>Dinner</option>
                    <option className='formOption' value='snack'>Snack</option>
                    <option className='formOption' value='teatime'>Teatime</option>
                </select>
                <input id='submitBtn' type='submit' value='Submit' onClick={() => {
                    setMealValues();
                    googleSearch(website);
                    console.log('Website', website);
                }}/>
                { boolean ? <RecipeCards recipes={recipe} website={website} /> : '' }
            </div>
        </div>
    )
}

export default Homepage