import React from 'react'

function RecipeCards(data) {
    // const { ingredientLines } = data;

    console.log(data);
    console.log('Hallo');
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea obcaecati, qui quam modi dolorem? Atque quibusdam expedita, libero et aliquam neque maxime?</p>
            <p>{data}</p>
        </div>
    )
}

export default RecipeCards
