/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/customers/{{customer_id}}/deliveries/{{delivery_id}}',

	data: {
		tip_by_customer: '{{tip_by_customer}}'
	}

}
