#ViajesClaros Backend

##Requerimientos

Tener instalado sin algún orden especifico 
* mysql server 5.5
* node server 0.10.26
* bower
* npm
* image magick

##Guia de instalacion

1. Descargar el proyecto

    `wget -O- https://github.com/el-sonny/viajes-claros-admin`
ó

    `git clone git@github.com:el-sonny/viajes-claros-admin.git` (requiere git)

2. Una vez descargado ejecutar: 

    `npm install`

3. Una vez concluido este proceso ejecutar: 

    `bower install`

4. Entrar a la carpeta dump/ dentro del proyecto descargardo ejecutar: 
    `mysql -u usuario -p < viajestransparentes.sql`

5. Una vez creada la base de datos hay que configurar la conexión a mysql en el archivo /config/local.js 

```JavaScript
module.exports = {
	connections:{
		'mysql-connection' : {
		    adapter: 'sails-mysql',
		    host: 'my_db_host',
		    user: 'my_db_user',
		    password: 'my_db_password',
		    database: 'viajestransparentes'
		},
	}
};
```

6. Por ultimo para levantar el servidor ejecutar:

    `node app.js`

7. Inicialmente se puede acceder al software con el user/pass: admin/admin posteriormente se puede cambiar la contraseña y generar nuevos usuarios.

##Frontend

Se puede instalar el frontend siguiendo los mismos pasos de este documento reemplazando el repositorio en el punto 1 con:

- https://github.com/el-sonny/viajes-claros.git

Ver el readme de ese repositorio para mas información