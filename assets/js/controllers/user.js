app.controller('userCTL',function($scope,$http){
    $scope.users = users;
	$scope.content = content;	

	$scope.getInfo = function(user){
		return {
			"Registro":user.createdAtString,
			"Ultimo acceso":user.lastLogin,
			"Email":user.email,
		}
	};

	$scope.createUser = function(newuser){
        $http({method: 'POST', url: '/user/create',params:newuser}).success(function (users){
            $scope.users = users;
            jQuery('#myModal').modal('hide');
        });    
    };
});
app.controller('userEditCTL',function($scope,$http){
    $scope.user = user;
	$scope.content = content;
	$scope.blank = {};
	delete $scope.content.user[3];
	$scope.savePass = function(form,cb){
		console.log(form);
		$http({method: 'POST', url: '/user/updatePass',params:form}).success(cb);
	}
});