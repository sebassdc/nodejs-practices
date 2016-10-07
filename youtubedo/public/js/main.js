angular.module("youtube", ["LocalStorageModule"])
.factory('ToDoService', function(localStorageService){
	var toDoService = {};
	toDoService.key = "angular-todolist";
	if (localStorageService.get(toDoService.key)) {
		toDoService.activities = localStorageService.get(toDoService.key);
	}else{
		toDoService.activities = [];
	}
	toDoService.updaLocalStorage = function(){
		localStorageService.set(toDoService.key, toDoService.activities);
	};
	toDoService.add = function(newActv){
		toDoService.activities.push(newActv)
		toDoService.updaLocalStorage();
	};
	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updaLocalStorage();
	};
	toDoService.getAll = function(){
		return toDoService.activities;
	}
	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	}
		return toDoService;
})
.controller("principal", function($scope, $http, ToDoService){
	$scope.lista = ToDoService.getAll();
	$scope.newActv = "";
	$scope.addActv = function(){
		ToDoService.add($scope.newActv);
		$scope.newActv = "";
	}
	$scope.removeActv = function(item){
		$scope.lista = ToDoService.removeItem(item);
	}
	$scope.clean = function(){
		ToDoService.clean();
	}
	$scope.descargar = function(){
		$http.post("/download", {activity: ToDoService.getAll()})
		.success(function(res){
			console.log("res: ",res);
		});
	}
});
