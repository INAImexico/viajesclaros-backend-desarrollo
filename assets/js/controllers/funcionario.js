app.controller('funcionarioCTL',function($scope,$http){
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

	$scope.createFuncionario = function(newfuncionario){
        $http({method: 'POST', url: '/funcionario/create',params:newfuncionario}).success(function (funcionarios){
            $scope.funcionarios = funcionarios;
            jQuery('#myModal').modal('hide');
        });    
    };

});

app.controller('funcionarioEditCTL',function($scope,$http){
    $scope.funcionario = funcionario;
	$scope.content = content;
});