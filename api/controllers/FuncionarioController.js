/**
 * FuncionarioController
 *
 * @description :: Server-side logic for managing funcionarios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req,res){
		Funcionario.find({}).sort('nombre_completo').exec(function(e,funcionarios){
			Common.view(res.view,{
				funcionarios:funcionarios,
				page:{
					name:'Funcionarios',
					icon:'fa fa-child',
					controller : 'funcionario.js'
				},
				breadcrumb : [
					{label : 'Funcionarios'}
				]
			},req);	
		})
	},
	create : function(req,res){
		var form = req.params.all();
		form.nombre_completo = form.nombre+' '+form.apellido_1+' '+form.apellido_2;
		Funcionario.create(form).exec(function(err,funcionario){
			if(err) return res.json({text:err});
			Funcionario.find({}).sort('nombre_completo').exec(function(e,funcionarios){
				if(e) return res.json({text:e});
				res.json(funcionarios);
			});
		});
	},
	edit : function(req,res){
		Funcionario.findOne(req.params.id).exec(function(e,funcionario){
			if(e) return res.redirect("/funcionario/");
			Common.view(res.view,{
				funcionario:funcionario,
				page:{
					name:funcionario.nombre_completo,
					icon:'fa fa-child',
					controller : 'funcionario.js'
				},
				breadcrumb : [
					{label : 'Funcionarios', url: '/funcionario/'},
					{label : funcionario.nombre_completo},
				]
			},req);	
		})
	},
	updateIcon: function(req,res){
    	form = req.params.all();
		Funcionario.updateAvatar(req,{
			dir : 'funcionarios',
			profile: 'avatar',
			id : form.id,
		},function(e,funcionario){
			if(e) console.log(e);
			res.json(funcionario);
		});
	},
};

