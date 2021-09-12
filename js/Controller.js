var myApp = angular.module('sampleApp', []);
myApp.controller('AngularController', function($scope,$http) {
     



    $scope.insertUser = function () {


        $http.post(
            "php/insertar_usuario.php", {

                firstName : $scope.firstName,
                lastName : $scope.lastName,
                username : $scope.username,
                email : $scope.email,
                pass : $scope.pass, 
                age : $scope.age, 
                gender : $scope.gender,
            }
        )
        .then(function (respuesta) {

            console.log(respuesta);
            $scope.firstName = null;
            $scope.lastName = null;
            $scope.username = null;
            $scope.email = null;
            $scope.pass = null;
            $scope.age = null;
            $scope.gender = null;
            $scope.creado= true;
        });
};
});