(function () {
	var controller = function($scope){
        $scope.nameVar = $scope.nameVar ? $scope.nameVar : 'name';
        $scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
        $scope.alphabetIndex = [];
        $scope.objects.forEach(function(object){
            $scope.alphabetIndex.push(object[$scope.nameVar].trim()[0].toUpperCase());
        });
        $scope.currentLetter = $scope.alphabetIndex[0];
        $scope.objectFilter = function(obj){
            if($scope.currentLetter && !$scope.keywords){
                return $scope.currentLetter == obj[$scope.nameVar].trim()[0].toUpperCase();
            }else{
                var regex = new RegExp($scope.keywords,'i');
                var name = obj[$scope.nameVar];
                return name.match(regex);
            }
        }
        $scope.selectLetter = function(l){
            if(l) $scope.currentLetter = l;
        }
        $scope.$watch('objects',function(){
            $scope.alphabetIndex = [];
            $scope.nameVar = $scope.nameVar ? $scope.nameVar : 'name';
            $scope.objects.forEach(function(object){
                $scope.alphabetIndex.push(object[$scope.nameVar].trim()[0].toUpperCase());
            });
        });
        $scope.info = function(object){
            return $scope.getInfo()(object);
        }
	};
	controller.$inject = ['$scope'];
    var directive = function () {
        return {
        	controller : controller,
        	scope : {
        		objects : '=',
                keywords : '=',
                dir : '@',
                editUrl : '@',
                nameVar : '@',
                getInfo : '&',
        	},
        	templateUrl : '/template/find/directoryListing.html'
        };
    };
    app.directive('directoryListing', directive);

}());
