/**
 * UserController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var bcrypt = require('bcrypt')
, moment = require('moment');

module.exports = {
	index: function(req,res){
		User.find({}).sort('name').exec(function(e,users){
			Common.view(res.view,{
				users:users,
				page:{
					name:'Usuarios',
					icon:'fa fa-users',
					controller : 'user.js'
				},
				breadcrumb : [
					{label : 'Usuarios'}
				]
			},req);	
		})
	},
	create : function(req,res){
		var form = req.params.all();
		var pass = form.password;
		delete form.password;
		User.create(form).exec(function(err,user){
			if(err) return res.json({text:err});
			user.setPassword(pass);
			User.find({}).sort('name').exec(function(e,users){
				if(e) return res.json({text:e});
				res.json(users);
			});
		});
	},
	edit : function(req,res){
		User.findOne(req.params.id).exec(function(e,user){
			if(e) return res.redirect("/user/");
			Common.view(res.view,{
				user:user,
				page:{
					name:user.name+' '+user.last_name,
					icon:'fa fa-users',
					controller : 'user.js'
				},
				breadcrumb : [
					{label : 'Usuarios', url: '/user/'},
					{label : user.name+' '+user.last_name},
				]
			},req);	
		})
	},
	updateIcon: function(req,res){
    	form = req.params.all();
		User.updateAvatar(req,{
			dir : 'users',
			profile: 'avatar',
			id : form.id,
		},function(e,user){
			if(e) console.log(e);
			res.json(user);
		});
	},
	update : function(req,res){
    	var form = req.params.all();
    	var id = form.id;
    	User.update({id:id},form,function(e,user){
    		if(e) throw(e);
    		User.findOne(user[0].id).exec(function(e,user){
    			if(e) throw(e);
    			res.json(user);
    		});
    	});
    },
    updatePass : function(req,res){
    	var form = req.params.all();
    	User.findOne(form.id).exec(function(e,user){
    		if(e) res.json(e);
    		user.setPassword(form.password);
    		res.json(user);
    	})
    }
};