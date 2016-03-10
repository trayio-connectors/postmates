/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get a delivery',

	// description: 'Just a sample message.',

	// Input schema config
	input: _.extend({

		customer_id: {
			type: 'string',
			required: true
		},

		delivery_id: {
			type: 'string',
			required: true
		},

	}, falafel.helpers.standardAuth)

};
