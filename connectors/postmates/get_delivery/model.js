/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/customers/{{customer_id}}/deliveries/{{delivery_id}}',

	afterSuccess: function (result) {
		return {
			data: result
		};
	}

}
