/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	hi: function (req, res) {
    	return res.send("Hi there!");
  	},

	profile: function (req, res) {
		return res.send(this);
	}
};

