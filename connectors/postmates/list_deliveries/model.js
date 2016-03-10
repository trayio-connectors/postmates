/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/customers/{{customer_id}}/deliveries',

	afterSuccess: function (result) {
		return {
			data: result
		};
	}

}
