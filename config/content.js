module.exports.content = {
	user : [
	    { 
	    	label : "Nombre",
	    	handle: "name",
	    	type : "text",
	    },
	    { 
	    	label : 'Apellidos',
	    	handle: "last_name",
	    	type : "text",
	    },
		{ 
			label : "Email",
			handle: "email",
			type : "text",
		},
	    { 
	    	label : "Contraseña",
	    	handle: "password",
	    	type : "password",
	    },
	],
	userPass : [
		{ 
	    	label : "Contraseña",
	    	handle: "password",
	    	type : "password",
	    },
		{ 
	    	label : "Confirmar Contraseña",
	    	handle: "password_confirm",
	    	type : "password",
	    },
	],
	funcionario : [
		{
			handle: "nombre",
			label : "Nombre",
			type : 'text'
		},
		{
			handle: "apellido_1",
			label : "Apellido materno",
			type : 'text'
		},
		{
			handle: "apellido_2",
			label : "Apellido paterno",
			type : 'text'
		},
		{
			handle: "email",
			label : "Email",
			type : 'text'
		},
	],
	funcionarioPuesto : [
		{
			handle: "tipo_personal",
			label : "Tipo de personal",
			type : 'text'
		},
		{
			handle: "cargo_nombre",
			label : "Cargo",
			type : 'text'
		},
		{
			handle: "cargo_nombre_superior",
			label : "Cargo superior",
			type : 'text'
		},
		{
			handle: "unidad_administrativa",
			label : "Unidad administrativa",
			type : 'text'
		},
		{
			handle: "clave_puesto",
			label : "Clave puesto",
			type : 'text'
		},
		{
			handle: "nombre_puesto",
			label : "Nombre del puesto",
			type : 'text'
		},
	]
};
