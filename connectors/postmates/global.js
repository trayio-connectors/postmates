/*
* Global connector config. 
*
* Documentation: https://github.com/trayio/falafel#globals 
*/
 

module.exports = {

	url: 'https://api.postmates.com/v1',

	expects: [201, 200],

	options: {
		username: '{{api_key}}',
		password: ' ' // needed to make basic auth work
	}

};