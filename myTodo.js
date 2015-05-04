/**
 * Created by Rajaa on 4/27/2015.
 */



var app = angular.module("todoApp", ["ngMaterial","firebase"])

    app.controller('TodoCtrl',function($scope, $firebaseArray){
        var ref = new Firebase("https://simpletodolist.firebaseio.com/");
        var todos = $firebaseArray(ref);


        $scope.todo = "";
        $scope.todos = [
            {myText:'Simple todo list application', done:false}

        ];

        $scope.addTodo = function(){

            $scope.todos.push({myText:$scope.todo, done:false});
            $scope.todo = "";

        };

        $scope.deleteTask = function(){
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo){

                if(!todo.done) $scope.todos.push(todo);

            });

        };





    });

