const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'https://api.weatherbit.io/v2.0/current?key=5a2cdd958d8a4184aef499a76ec9a3bb&lat=38.123&lon=-78.543';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to get response from weather api');
//     } else if (response.body.error) {
//         console.log('Place not found');
//     } else {
//         // console.log(response.body);
//         // console.log(response.body.data[0].weather);
//         console.log("It is currently " + response.body.data[0].temp + " degrees out. There is a " + response.body.data[0].precip + "% chance of rain");
//     }
// });

// const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmhhbnVraXJhbnQiLCJhIjoiY2tkbmN2NHp6MWdpMDJ6cm9jcGNqeXFoZSJ9.yqTu319Fm2KmCH0KQnj5NQ&limit=1';

// request({ url: geourl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to get response from location api');
//     } else if (response.body.message || response.body.features.length === 0) {
//         console.log('Unable to locate the Place, try another');
//     } else {
//         console.log(response.body);
//         const latitude = response.body.features[0].geometry.coordinates[0];
//         const longitude = response.body.features[0].geometry.coordinates[1];
//         console.log(latitude, longitude);
//     }
    
// });



geocode('hydrabad', (error, data) => {
    console.log(error, data);
})

// c3e5bb33f9mshf6911228a8c7962p11959ajsnf97032de6731
// 9d1465c6f3bb71944bdd8548d026/37.8267,-122.4233

// https://api.weatherbit.io/v2.0/current?key=5a2cdd958d8a4184aef499a76ec9a3bb&lat=38.123&lon=-78.543
// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmhhbnVraXJhbnQiLCJhIjoiY2tkbmN2NHp6MWdpMDJ6cm9jcGNqeXFoZSJ9.yqTu319Fm2KmCH0KQnj5NQ&limit=1