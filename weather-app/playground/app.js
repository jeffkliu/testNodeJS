const request = require('request')


request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20phildelphia&key=AIzaSyA-7KlkAohBN4oOZUpPCtGxWz0JCtTI7BQ',
	json: true
}, (error, response, body)=> {
	console.log(JSON.stringify(response, undefined, 2));
})