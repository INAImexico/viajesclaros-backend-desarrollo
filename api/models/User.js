/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
		email:'string',
		password:'string',
		name:'string',
		last_name:'string',
		icon:'json',
		active: 'boolean',
		access_date:'date',
		lastLogin : 'datetime',
		setPassword : function(val,cb){
			this.password = bcrypt.hashSync(val,bcrypt.genSaltSync(10));
			this.save(cb);
		},
  }
};

