var app = angular.module('mainApp',['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {templateUrl:'pages/expense.hjs', controller : 'expenseCont'})
		.when('/income', {templateUrl:'pages/income.hjs', controller : 'incomeCont'})
		.when('/thank-you', {templateUrl:'pages/thank-you.hjs'})
		.when('/result', {templateUrl:'pages/result.hjs'})
		.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);
}]);

app.controller('mainCont', function(){});

app.controller('expenseCont', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.addExpense = function(){
		$http.post('/addExpense',$scope.expense).success(function(){
			$location.path('/thank-you');
		})
	}
}]);
app.controller('incomeCont', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.addIncome = function(){
		$http.post('/addIncome',$scope.income).success(function(){
			$location.path('/thank-you');
		})
	}
}]);

