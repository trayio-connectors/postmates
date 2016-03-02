/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/delivery_zones',

	afterSuccess: function (result) {
		return {
			data: result
		};
	}

}