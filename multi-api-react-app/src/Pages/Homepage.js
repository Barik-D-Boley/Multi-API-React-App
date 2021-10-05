import React, { /* useState */ } from 'react'

// Use Google Maps API to put in recipe ingredients and find stores nearby to buy them at
function Homepage() {
// Sets deck count
    // fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    // .then(response => {
    //     console.log('Deck of Cards');
    //     const name = response.json();
    //     console.log(name);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
// Draws cads
    // fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=2')
    // .then(response => {
    //     console.log('Drawn Cards');
    //     const name = response.json();
    //     console.log(name);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
// Email Verification
    // fetch('https://emailvalidation.abstractapi.com/v1/?api_key=2f48bbb070c647b891c70fb908139f55&email=xBarikadex@hotmail.com')
    // .then(response => {
    //         const name = response.json();
    //         console.log(name);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
// Gender Probability
    // fetch('https://api.genderize.io?name=donald')
    // .then(response => {
    //         const name = response.json();
    //         console.log(name);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
// Recipes
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=11ff8d9e&app_key=01250d39e0db773e22ad3860dcbfc9f9')
    .then(response => {
            const name = response.json();
            console.log(name);
    })
    .catch(err => {
        console.log(err);
    })

    return (
        <div>
            
        </div>
    )
}

export default Homepage


/* 
    fetch('')
    .then(response => {
            const name = response.json();
            console.log(name);
    })
    .catch(err => {
        console.log(err);
    })
*/