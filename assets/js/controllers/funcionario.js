app.controller('funcionarioCTL',function($scope){
    $scope.funcionarios = funcionarios;
    $scope.content = content;
	$scope.getInfo = function(funcionario){
		return {
			"Cargo":funcionario.cargo_nombre,
			"Puesto":funcionario.nombre_puesto,
			"Email":funcionario.email,
			"Tipo de Personal":funcionario.tipo_personal,
		}
	};
});