import React, { /* useState */ } from 'react'

// Use Google Maps API to put in recipe ingredients and find stores nearby to buy them at
function Homepage() {
// Recipes API
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=11ff8d9e&app_key=01250d39e0db773e22ad3860dcbfc9f9')
    .then(response => {
        console.log('Recipe');
        const name = response.json();
        console.log(name);  
    })
    .catch(err => {
        console.log(err);
    })
// Google Sheets API
    // fetch("https://google-sheets-toolbox.p.rapidapi.com/", {
    //     "method": "POST",
    //     "headers": {
    //         "content-type": "application/json",
    //         "x-rapidapi-host": "google-sheets-toolbox.p.rapidapi.com",
    //         "x-rapidapi-key": "39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db"
    //     },
    //     "body": {
    //         "action": "add rows",
    //         "options": {
    //             "addNewRows": [
    //                 [
    //                     "Alpha",
    //                     "1"
    //                 ],
    //                 [
    //                     "Omega",
    //                     "2"
    //                 ]
    //             ],
    //             "googleClientEmail": "multi-api-react-app@multi-api-react-app.iam.gserviceaccount.com",
    //             "googlePrivateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiEAghy8OW8B7/\n3wIEWONQxrLCpw00DXvvngc/ZlAeVth/sy3Qx+1f5NrNbLppLI647B8EP9CJRxBg\ntgaNoiZcb+YSBMJRfxrpXvbf5RCUCqkHwI2beTl4at07CxW+5Xba82x7m/Ew15bv\nOHqvmQ02Jv1DfCwFQgyLw9PUHnMxU3V9arwulkGGYQjvSDNVHfjOdxn2YxHEPM2L\nz7Oal8BqGPaRQjlnHod4AwUxgo1Uuc4iLvTEGC72DYb9cxVKW4jVYIWC2QvpiCI7\nRgVQlj1SAMMDPn/XQvUmF2CPaDAafmyWz0k+EDKol4D5q50eI3FZsfiZX7920Woz\n5VnwzHnvAgMBAAECggEAPj5wESLkzU0OavHpIWhOblDSiaaFkK95IXANkpEmRnDO\nmEVmXGDdT85jJzESa6C8dFPkGcq0unT72lkvLSjRGQG1WMhRJeHuoSFjKl0dP+7U\nOvD+sm8d3p0UuT+pq3cQbkm+Kb+cJEk5ZEnJ/TWIeHsDHO9NLPvQO8IL0tWbIp8x\nfeoKP8BB44ldfLuXnSFxp55c3KevsOVSQAZHs/2z7BEKiYDE+MCw82Xppms3r5tB\nILt3SvWMEoUZoa5xw0XoyJ49gmTWYrB0/ZSDKULxQvW30QY3mZkgcdDFI85y4fsT\nERCEtsbm8ztjQ25A3yLDtWT/nywgwiBVFsHX6SDD4QKBgQDb5HVnjKTG0wrcXe7s\n2H64+2h1U9ejU/K/AX07d+QFUx2usps2jPUtTIQgfTjkSDip7XtnEzJx+h/pKKIz\n/xqCpQISSS6Hj1wjZdw3D8MvkU1HimsjHzF66CBaH1qmrvN24ca7+p+AFHMdQlWo\nf2+t5qrGRZ5sFyiI+Ij3wOW6nwKBgQC8rJopQgAbqPCaCpRaE+/sYrRIuXvLwbF9\nFuR6kt4fQCRFiQEI9ZWemH5dMKSaciX8jS2ZMxnXTfNz69IYkrmYFrA4FoDcdA6l\nlnQE+PLsK8P179HCUtMKcGXfh6miwqxhHZ7FePDMBhP9X3fXIcMaIVzNDFniBYdD\nq6x1cKZOsQKBgQCM6rCuhnxGipLIPE5UbD1xsHP11KA5pB/JdlvaE3AGVYiNHxrG\n77hjqkh2RamC6iGeDHnryWqnjkKK+iZQqihEFxjnvQxbhWznpmxkwO41+qkKstML\n8/6SpFWvS66daTrPMctZRjiXLQPEeXFJhTl9uXgxjgYDgSfR92xXUcAnQwKBgF8k\nSrjzZ0qLboi/PQAPfbUeMPtbTWn6Sp5hpOWKmif4GFJYPAVgkgpfq5kipl6boTwx\nlQTkF+vSiymxiUiK9LwU9NfTwTdp7tjhfa/kOduOVkr2nDf5vCJPe4+0wX4p3PM8\nFIxP6F150yq5sZzykYfjuwBLciff0c32DAlMvRCBAoGAfgXhAVe82sN4O5L37DcX\nXapR1pzQ49tZM696kXblzMJoD8Bl/eoYigBEdDjgZHPxEQ3iungj3kquWt3U8AeU\nv2QqhjdRFGgKlCfp+HDboMxMSPKYP5eFWIuv5SSpkl1T/5aHOQJAPCwleG1u4ylY\n86jGyJYESrzBk9QIqcGJMq0=\n-----END PRIVATE KEY-----\n",
    //             "googleSheetId": "1Kl036ouyE0L-Mj_Rz6Ysvl4gfQfBrsGg57DW_uIqXso",
    //             "googleSheetTabTitle": "Recipe 1"
    //         }
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });

    return (
        <div>
            <h1>DO NOT REFRESH THE PAGE</h1>
            <p>Instead, try "Ctrl + l" in the console</p>
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