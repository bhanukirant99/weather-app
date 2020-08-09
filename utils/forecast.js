const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?key=5a2cdd958d8a4184aef499a76ec9a3bb&lat=' + lat + '&lon=' + long;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to get response from weather api', undefined);
        } else if (response.body.error) {
            callback('Place not found', undefined);
        } else {
            callback(undefined, "It is currently " + response.body.data[0].temp + " degrees out. There is a " + response.body.data[0].precip + "% chance of rain");
            // console.log(response.body);
            // console.log(response.body.data[0].weather);
        }
    });
}

module.exports = forecast;