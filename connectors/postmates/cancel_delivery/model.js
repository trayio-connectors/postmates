/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/customers/{{customer_id}}/deliveries/{{delivery_id}}/cancel',

	afterSuccess: function (result) {
		return {
			data: result
		};
	}

}
