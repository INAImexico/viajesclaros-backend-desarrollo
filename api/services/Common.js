module.exports.view = function(view,data,req){
	data = data || {};
	data.page = data.page || {};
	data.breadcrumb = data.breadcrumb || [{label:'Tablero'}];
	data.current_user = req.user;
	data._content = sails.config.content;
	view(data);
};