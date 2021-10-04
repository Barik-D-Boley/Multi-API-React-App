import React, { /* useState */ } from 'react'

// I will have the plane API calculate how long a flight will be, then show movie(s) that are close to that length
function Homepage() {
    // const [country, setCountry] = useState('US');
    // const [currency, setCurrency] = useState('USD');
    // const [language, setLanguage] = useState('en-US');
    // const [startCity, setStartCity] = useState('New%20York');

    // fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country.toUpperCase()}/${currency.toUpperCase()}/${language}/?query=${startCity}`, {
    //     'method': 'GET',
    //     'headers': {
    //         'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    //         'x-rapidapi-key': '39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db'
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    //     const name = response.json();
    //     console.log(name);
    // })
    // .catch(err => {
    //     console.error(err);
    // });

    // fetch("http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/FR/eur/en-US/us/anywhere/anytime/anytime?apikey=prtl6749387986743898559646983194")
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });

    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2021-10-05?inboundpartialdate=2021-10-10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "39eb21bbd1msha190384ce6dd237p1d93c8jsn16d5c24c24db"
	}
    })
    .then(response => {
        console.log(response);
        const name = response.json();
        console.log(name);
    })
    .catch(err => {
        console.error(err);
    });

    return (
        <div>
            <p>Country (2 letter Max)</p>
            <input type='text' minLength='2' maxLength='2' placeholder='US'/>
            <p>Currency</p>
            
        </div>
    )
}

export default Homepage
