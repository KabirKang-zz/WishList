var wish = angular.module('wish', []);
var have = angular.module('have', []);

wish.filter('timeago', function(){
	return function(date){
		return moment(date).fromNow();
	}
});

have.filter('timeago', function(){
	return function(date){
		return moment(date).fromNow();
	}
});

function mainController($scope, $http) {

	$scope.formData = {};
	$scope.wishText = {};

	$scope.initialize = function() {
		$http.get('/api/wishes')
			.success(function(data) {
				$scope.wishes = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		$http.get('/api/haves')
			.success(function(data) {
				$scope.haves = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.createWish = function() {

		console.log($scope.formData);

		$http.post('/api/wishes', $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.wishes = data;
				console.log('Creating wish [' + data.text + ']');
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.createHave = function(haveText) {


		var textToPost = {'text': haveText};
		$http.post('/api/haves', textToPost)
			.success(function(data) {
				$scope.haves = data;
				console.log('Creating have [' + data.text + ']');
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteWish = function(wishId) {
		$http.delete('/api/wishes/' + wishId)
			.success(function(data) {
				$scope.wishes = data;
				console.log(data);
			}).error(function(data) {
				console.log('Error: ' + data)
			})
	};

}