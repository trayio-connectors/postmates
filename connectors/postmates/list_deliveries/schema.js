/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List deliveries',

	// description: 'Just a sample message.',

	// Input schema config
	input: _.extend({

		customer_id: {
			type: 'string',
			required: true
		},

		filter: {
			type: 'string'
		},

	}, falafel.helpers.standardAuth)

};
