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
	}
};

