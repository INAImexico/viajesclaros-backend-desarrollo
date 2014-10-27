/**
 * ViajeController
 *
 * @description :: Server-side logic for managing viajes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req,res){
		Viaje.find({}).populate('funcionario').sort('ciudad_destino').exec(function(e,viajes){
			Common.view(res.view,{
				viajes:viajes,
				page:{
					name:'viajes',
					icon:'fa fa-plane',
					controller : 'viaje.js'
				},
				breadcrumb : [
					{label : 'viajes'}
				]
			},req);	
		})
	},	
	create : function(req,res){
		var form = req.params.all();
		Viaje.create(form).exec(function(err,viaje){
			if(err) return res.json({text:err});
			Viaje.find({}).sort('ciudad_destino').exec(function(e,viajes){
				if(e) return res.json({text:e});
				res.json(viajes);
			});
		});
	},

	edit : function(req,res){
		Viaje.findOne(req.params.id).populate('funcionario').exec(function(e,viaje){
			if(e) return res.redirect("/viaje/");
			Common.view(res.view,{
				viaje:viaje,
				page:{
					name:viaje.ciudad_destino+' - '+viaje.funcionario.nombre_completo,
					icon:'fa fa-plane',
					controller : 'viaje.js'
				},
				breadcrumb : [
					{label : 'Viajes', url: '/viaje/'},
					{label : viaje.ciudad_destino+' - '+viaje.funcionario.nombre_completo},
				]
			},req);	
		})
	},
};

