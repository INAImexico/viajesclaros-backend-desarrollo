var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy
, bcrypt = require('bcrypt');
passport.use(new LocalStrategy(function(username, password, done){
	process.nextTick(function () {
		User.findOne({ email: username })
		.exec(function(err, user) {
			if (err) { return done(null, err); }
			if (!user) { 
				return done(null, false, { message: 'Unknown user ' + username }); 
			}
			bcrypt.compare(password, user.password, function(err, res) {
				if (!res) return done(null, false, { message: 'Invalid Password'});
                User.update({id : user.id},{ lastLogin : new Date() }).exec(function(err,ruser){
                    return done(null, user, { message: 'Logged In Successfully'} );
                });
			});
		})
	});
}));

passport.serializeUser(function(user,done){ 
	done(null, user);
});

passport.deserializeUser(function(id,done){	
	User.findOne({id:id.id}).exec(done);
});	

module.exports = {
	express:{
		customMiddleware: function(app){
			app.use(passport.initialize());
			app.use(passport.session())
		}

	}
}
