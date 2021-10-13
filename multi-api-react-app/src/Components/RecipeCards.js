import React from 'react'

function RecipeCards(data, key) {
    const { ingredientLines } = data;

    return (
        <div>
            <p>{ingredientLines}</p>
            <p>{key}</p>
        </div>
    )
}

export default RecipeCards
