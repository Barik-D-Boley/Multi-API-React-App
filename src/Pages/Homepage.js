import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from '../Components/Welcome';
import RecipeCards from '../Components/RecipeCards';
import LoadingPage from '../Components/LoadingPage';
import ErrorPage from '../Components/ErrorPage';

function Homepage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [recipe, setRecipe] = useState();
    let website;
    const [boolean, setBoolean] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [])

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

    if (isLoading === true) return <LoadingPage />
    if (isError === true) return <ErrorPage />

    return (
        <div className='masterContainer'>
            <div id='navbarContainer'>
                <div id='navbar'>
                    <input className='input' id='query' name='query' type='text' placeholder='Chicken'/>
                    <select className='input' id='cuisines' name='cuisines'>
                        <option className='defaultOption' value='empty'>Choose a Cuisine</option>
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
                    <select className='input' id='mealType' name='mealType'>
                        <option className='defaultOption' value='empty'>Meal Type</option>
                        <option className='formOption' value='breakfast'>Breakfast</option>
                        <option className='formOption' value='lunch'>Lunch</option>
                        <option className='formOption' value='dinner'>Dinner</option>
                        <option className='formOption' value='snack'>Snack</option>
                        <option className='formOption' value='teatime'>Teatime</option>
                    </select>
                    <input className='input submitBtn' type='submit' value='Submit' onClick={() => {setMealValues()}}/>
                </div>
            </div>
            <div id='allRecipes'>
                { boolean ? <RecipeCards recipes={recipe} website={website} /> : <Welcome /> }
            </div>
            <footer>
                Designed by Barik Boley | 5902 W Peoria Ave, Glendale, AZ 85302 | <a href="mailto:nowhere@gmail.org?cc=name2@rapidtables.com&bcc=name3@reapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%email" id="contactUs">Contact Us</a> | Copyright &copy; 2021 My Thoughts
            </footer>
        </div>
    )
}

export default Homepage