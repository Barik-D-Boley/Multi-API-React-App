import React, { /* useState */ } from 'react'

// Use Google Maps API to put in recipe ingredients and find stores nearby to buy them at
function Homepage() {
// Recipes
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=11ff8d9e&app_key=01250d39e0db773e22ad3860dcbfc9f9')
    .then(response => {
        console.log('Recipe');
        const name = response.json();
        console.log(name);  
    })
    .catch(err => {
        console.log(err);
    })
// Google Sheets
    fetch('https://google-sheets-toolbox.p.rapidapi.com/', {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'google-sheets-toolbox.p.rapidapi.com',
            'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
        },
        'body': {
            'action': 'add sheet',
            'options': {
                'addNewRows': [
                    [
                        'alpha',
                        '1'
                    ],
                    [
                        'omega',
                        '2'
                    ]
                ],
                'googleClientEmail': 'rapidapi-demo@coinsy-alpha.iam.gserviceaccount.com',
                'googlePrivateKey': 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCVDX9BEIew4c2poxv/oglrGIHhzwZWfkwK9OeCJ07fDOGA7gH81Co2v+7yGzWW61i5T7dbFjsHuxwTwbNK4B5Vc1SRV8tSxJt5F5HQYRbieAxg80xswXHevmK/lxeVjlJ/kzGcs2Ajx0KzBocLMUBAh20uEor1ROeBf05NZGXu8S03C5Khr5FLotWzPO7i37qpYbLba4ZeIHInW27rQShvDs0LWn/vB/u6ATp5G2Mjl7OrI6h8IxjQNbilbexOnWHCZvsNfG4f1DUu/MeW2E87ofxjiZo1sc8qr9lZfBg0oVEGHnDc2glQJmNdxg1PuRsKeDOGNj/mv5ufeWYnjkarAgMBAAECggEACFVI2Apki68UIHfOCOy2OhaUrFs2r39AIRywFMa90hqWQO8NjWUPNyBj64U56cYen72lMqJ7imMbnr8llvoQuBZKlBWkeGwlhQ+cR1omPWMYzhLMIwhtpVZfjvaTivj6A8fm7ivZJCbvw7KJukZ2oSTxJbJDspK3nrXPWuRSDpm3ZOOOpRqj/FJqUWblqKjXXZNGUp9n9JMgI5CtcaHO7rAovU7vm19yN90DHAdVk474dUaSPHl/rpdPUhWXcTLSGGBVBjAq5QlLUadgM/thPSa5wI29KlQcneEp5yQA4O3vJCA/w3Uf+0AVsbjqOhF9edfYJKAl7FqfQfjJ6ysvgQKBgQDG9eA2SQX816tcSLpaifI3y+bNXGiz6Vyo7wuamKWPYNfDG75ndssYQFJipeKsNnH16uPOTydGL8A1pFXTy+3YUMPkBo2hphVpAgHlREapz8MQl8p0rlspSvcFNIKMxnZPztJLZJxMSr3IQpggt02W4H4t2fV0nwZ3mpru6+BQdQKBgQC/yMnbLqa1gO8vXiDUGU/ijnu99RvLeHZSQTKxgZytJKL032w9whXuJMarmFxgFjEy1Y6y1hXNlwb8Mw58pb3W6jN7LtCKJ9h8CiL/tl75yTfe/YdpKDo3D/JqezMdh/Z1VYYBcBMEim8/T9Fr0/fYVTQDrwcLPr3rPnAUlMFWnwKBgQCnzbQ+1LPyHkvu14Ak4Hejy5tr1OaR5t45tPOKffgUx07yxbF/PdfpKkbR4KsfKARRrrxXwraTIa7xDxs8OKDvcp7k8Qn/Lj6chA7pOP6INiyFECC27F8CorFYeIMrDC+4++ytnbudNOR/xHreDPuppsmFDnFQ3NbthT3rCJH2CQKBgQCRjcc9dVOLD1b4oTzTHH7XmIHrsnos27kZRmg99fu+IL8Yj/TrjkDso7awhwsc1drzFMefjQGxLf1cLTfCfFvvH4KA7A/Tutf/lAXqAzRj6UZhFBPQSHqeTZkTHXu23vi7JnR05OVaHeK+r0pmxtIkus2mOhFjhHPJdXLE+/0cSwKBgFmXQSHousyeZBwaRIya3Xwt17yWxOoS0Mw6RWNDu4J7MiYlSpdzBxOD/qqDFHcRxi03/9xu9rVG19in64x58nEEN133yBS/e9YHAjOj7MYuPs/hmD1NhKmrP0vxQmD0dWtTruB6wQf+oFpk02AlEJWyjwxBP9dIQBy+9CJleHaF',
                'googleSheetId': '1XT_c-iUVE6LfxsasKGM3HF9WkQZICH9QtnytVBMcoRY',
                'googleSheetTabTitle': 'Omega',
                'sheetColumnCount': 2,
                'sheetHeaders': [
                    'users',
                    'id'
                ],
                'sheetRowCount': 10
            }
        }
    })
    .then(response => {
        console.log('Sheets');
        const name = response.json();
        console.log(name);  
    })
    .catch(err => {
        console.error(err);
    });

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