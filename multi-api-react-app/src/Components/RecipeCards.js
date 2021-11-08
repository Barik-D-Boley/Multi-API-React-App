import React from 'react';
import axios from 'axios';

let clientEmail =  'multi-api-react-app@multi-api-react-app.iam.gserviceaccount.com';
let privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiEAghy8OW8B7/\n3wIEWONQxrLCpw00DXvvngc/ZlAeVth/sy3Qx+1f5NrNbLppLI647B8EP9CJRxBg\ntgaNoiZcb+YSBMJRfxrpXvbf5RCUCqkHwI2beTl4at07CxW+5Xba82x7m/Ew15bv\nOHqvmQ02Jv1DfCwFQgyLw9PUHnMxU3V9arwulkGGYQjvSDNVHfjOdxn2YxHEPM2L\nz7Oal8BqGPaRQjlnHod4AwUxgo1Uuc4iLvTEGC72DYb9cxVKW4jVYIWC2QvpiCI7\nRgVQlj1SAMMDPn/XQvUmF2CPaDAafmyWz0k+EDKol4D5q50eI3FZsfiZX7920Woz\n5VnwzHnvAgMBAAECggEAPj5wESLkzU0OavHpIWhOblDSiaaFkK95IXANkpEmRnDO\nmEVmXGDdT85jJzESa6C8dFPkGcq0unT72lkvLSjRGQG1WMhRJeHuoSFjKl0dP+7U\nOvD+sm8d3p0UuT+pq3cQbkm+Kb+cJEk5ZEnJ/TWIeHsDHO9NLPvQO8IL0tWbIp8x\nfeoKP8BB44ldfLuXnSFxp55c3KevsOVSQAZHs/2z7BEKiYDE+MCw82Xppms3r5tB\nILt3SvWMEoUZoa5xw0XoyJ49gmTWYrB0/ZSDKULxQvW30QY3mZkgcdDFI85y4fsT\nERCEtsbm8ztjQ25A3yLDtWT/nywgwiBVFsHX6SDD4QKBgQDb5HVnjKTG0wrcXe7s\n2H64+2h1U9ejU/K/AX07d+QFUx2usps2jPUtTIQgfTjkSDip7XtnEzJx+h/pKKIz\n/xqCpQISSS6Hj1wjZdw3D8MvkU1HimsjHzF66CBaH1qmrvN24ca7+p+AFHMdQlWo\nf2+t5qrGRZ5sFyiI+Ij3wOW6nwKBgQC8rJopQgAbqPCaCpRaE+/sYrRIuXvLwbF9\nFuR6kt4fQCRFiQEI9ZWemH5dMKSaciX8jS2ZMxnXTfNz69IYkrmYFrA4FoDcdA6l\nlnQE+PLsK8P179HCUtMKcGXfh6miwqxhHZ7FePDMBhP9X3fXIcMaIVzNDFniBYdD\nq6x1cKZOsQKBgQCM6rCuhnxGipLIPE5UbD1xsHP11KA5pB/JdlvaE3AGVYiNHxrG\n77hjqkh2RamC6iGeDHnryWqnjkKK+iZQqihEFxjnvQxbhWznpmxkwO41+qkKstML\n8/6SpFWvS66daTrPMctZRjiXLQPEeXFJhTl9uXgxjgYDgSfR92xXUcAnQwKBgF8k\nSrjzZ0qLboi/PQAPfbUeMPtbTWn6Sp5hpOWKmif4GFJYPAVgkgpfq5kipl6boTwx\nlQTkF+vSiymxiUiK9LwU9NfTwTdp7tjhfa/kOduOVkr2nDf5vCJPe4+0wX4p3PM8\nFIxP6F150yq5sZzykYfjuwBLciff0c32DAlMvRCBAoGAfgXhAVe82sN4O5L37DcX\nXapR1pzQ49tZM696kXblzMJoD8Bl/eoYigBEdDjgZHPxEQ3iungj3kquWt3U8AeU\nv2QqhjdRFGgKlCfp+HDboMxMSPKYP5eFWIuv5SSpkl1T/5aHOQJAPCwleG1u4ylY\n86jGyJYESrzBk9QIqcGJMq0=\n-----END PRIVATE KEY-----\n';
let spreadsheetId = '1Kl036ouyE0L-Mj_Rz6Ysvl4gfQfBrsGg57DW_uIqXso';

function RecipeCards(recipes) {
    function getSheets(recipeTitle) {
        const options = {
        method: 'POST',
        url: 'https://google-sheets-toolbox.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'google-sheets-toolbox.p.rapidapi.com',
            'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
        },
        data: {
            action: 'add sheet',
            options: {
                addNewRows: [['Omega', '1'], ['Alpha', '2']],
                googleClientEmail: clientEmail,
                googlePrivateKey: privateKey,
                googleSheetId: spreadsheetId,
                googleSheetTabTitle: recipeTitle,
                sheetColumnCount: 2,
                sheetHeaders: ['Ingredient', 'Amount'],
                sheetRowCount: 1
            }
        }};
        axios.request(options).then(function (response) {
            console.log(response.data);
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
                    <button className='sheetsBtn' onClick={() => getSheets(label)}>Add to Sheets</button>
                </div>
            </div>
        )
    }
    return stuff
}

export default RecipeCards