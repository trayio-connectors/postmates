
/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/customers/{{customer_id}}/delivery_quotes',

	data: {
		pickup_address: '{{pickup_address}}',
		dropoff_address: '{{dropoff_address}}'
	}

}