const request = require('request');

const url = 'https://api.weatherbit.io/v2.0/current?city=Bangalore,IN&key=5a2cdd958d8a4184aef499a76ec9a3bb';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body);
    console.log(response.body.data[0].weather);
    console.log("It is currently " + response.body.data[0].temp + " degrees out. There is a " + response.body.data[0].precip + "% chance of rain");
});


// c3e5bb33f9mshf6911228a8c7962p11959ajsnf97032de6731
// 9d1465c6f3bb71944bdd8548d026/37.8267,-122.4233

// https://api.weatherbit.io/v2.0/current?city=Bangalore,IN&key=5a2cdd958d8a4184aef499a76ec9a3bb

