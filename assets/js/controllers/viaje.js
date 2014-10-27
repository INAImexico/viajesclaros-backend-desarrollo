app.controller('viajeCTL',function($scope,$http){
    $scope.viajes = viajes;
	$scope.content = content;	

	$scope.getInfo = function(viaje){
		return {
			"Funcionario" : viaje.funcionario.nombre_completo,
			"Fecha Inicio":viaje.fecha_inicio_part,
			"Fecha Fin":viaje.fecha_fin_part,
		}
	};

	$scope.createviaje = function(newviaje){
        $http({method: 'POST', url: '/viaje/create',params:newviaje}).success(function (viajes){
            $scope.viajes = viajes;
            jQuery('#myModal').modal('hide');
        });    
    };
});
app.controller('viajeEditCTL',function($scope,$http){
    $scope.viaje = viaje;
	$scope.content = content;
	
});