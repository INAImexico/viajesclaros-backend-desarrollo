module.exports.view = function(view,data,req){
	data = data || {};
	data.page = data.page || {};
	data.breadcrumb = data.breadcrumb || [{label:'Tablero'}];
	data.current_user = req.user;
	data._content = sails.config.content;
	view(data);
};

module.exports.sendFuncionarioUpdate = function(funcionario) {
    Subscription.find({ funcionario : funcionario.id}).exec(function(err,subscriptions) {
        var mail = new sendgrid.Email({
            from: 'contact@viajesclaros.com',
            subject: 'Actualizacion de datos de ' + funcionario.nombre_completo,
            text: 'Checalo aqui : http://viajestransparentes.node.spaceshiplabs.com/funcionario?id=' + funcionario.id
        });
        _.forEach(subscriptions,function(subscription){
            mail.addTo(subscription.email);
        });
        this.sendEmail(mail);
    });
};

module.exports.sendEmail = function(email,cb) {
    sendgrid.send(email, function(err, json) {
        if (err) { return console.error(err); }
        cb();
    });
};