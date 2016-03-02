/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get delivery quote',

	// description: 'Just a sample message.',

	// Input schema config
	input: _.extend({

		customer_id: {
			type: 'string',
			required: true
		},

		pickup_address: {
			type: 'string',
			required: true
		},

		dropoff_address: {
			type: 'string',
			required: true
		}

	}, falafel.helpers.standardAuth)

};