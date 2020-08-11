const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv.splice(2).toString();
if (!address) {
    console.log('Enter a place');
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}

// c3e5bb33f9mshf6911228a8c7962p11959ajsnf97032de6731
// 9d1465c6f3bb71944bdd8548d026/37.8267,-122.4233

// https://api.weatherbit.io/v2.0/current?key=5a2cdd958d8a4184aef499a76ec9a3bb&lat=38.123&lon=-78.543
// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmhhbnVraXJhbnQiLCJhIjoiY2tkbmN2NHp6MWdpMDJ6cm9jcGNqeXFoZSJ9.yqTu319Fm2KmCH0KQnj5NQ&limit=1