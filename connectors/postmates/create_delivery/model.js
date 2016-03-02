/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/customers/{{customer_id}}/deliveries',

	data: {
		
		quote_id: '{{quote_id}}',

		manifest: '{{manifest}}',

		manifest_reference: '{{manifest_reference}}',

		pickup_name: '{{pickup_name}}',

		pickup_address: '{{pickup_address}}',

		pickup_phone_number: '{{pickup_phone_number}}',

		pickup_business_name: '{{pickup_business_name}}',

		pickup_notes: '{{pickup_notes}}',

		dropoff_name: '{{dropoff_name}}',

		dropoff_address: '{{dropoff_address}}',

		dropoff_phone_number: '{{dropoff_phone_number}}',

		dropoff_business_name: '{{dropoff_business_name}}',

		dropoff_notes: '{{dropoff_notes}}'

	}

}