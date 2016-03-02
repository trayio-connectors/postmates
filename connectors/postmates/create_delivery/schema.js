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

		quote_id: {
			type: 'string'
		},

		manifest: {
			type: 'string',
			required: true
		},

		manifest_reference: {
			type: 'string'
		},

		pickup_name: {
			type: 'string',
			required: true
		},

		pickup_address: {
			type: 'string',
			required: true
		},

		pickup_phone_number: {
			type: 'string',
			required: true
		},

		pickup_business_name: {
			type: 'string'
		},

		pickup_notes: {
			type: 'string'
		},

		dropoff_name: {
			type: 'string',
			required: true
		},

		dropoff_address: {
			type: 'string',
			required: true
		},

		dropoff_phone_number: {
			type: 'string',
			required: true
		},

		dropoff_business_name: {
			type: 'string'
		},

		dropoff_notes: {
			type: 'string'
		},


	}, falafel.helpers.standardAuth)

};