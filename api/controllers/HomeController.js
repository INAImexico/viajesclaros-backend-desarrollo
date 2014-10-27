/**
 * HomeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var passport = require('passport');
module.exports = {
	login: function(req,res){
		res.view({
			layout:null
		});
	}

	, logout: function(req,res){
		req.logout();
		res.redirect('/home/login');	
	}

	, auth: passport.authenticate('local',{
		    successRedirect: '/'
	       ,failureRedirect: '/home/login'
		   ,failureFlash: true
	   })

	, index: function(req,res){
		Common.view(res.view,{
			page:{
				description:'AQUI PODRAS VISUALIZAR Y ADMINISRAR TODO TU PROCESO DE VENTA',
				icon:'fa fa-th-large',
				name:'Tablero'
			}
		},req);
	}
	
};