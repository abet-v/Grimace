/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	/**
	* req.post.firstname
	* req.post.lastName
	* req.post.username
	* req.post.email
	* req.post.password
	*/
	processsignup: function (req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},

	processlogin: function (req, res){
		
		req.session.authenticated = true;

	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},

	logout: function (req, res){
	    return res.json({
	      todo: 'Not implemented yet!'
	    });
	},


};