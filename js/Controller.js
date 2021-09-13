var myApp = angular.module('sampleApp', []);
myApp.controller('AngularController', function($scope,$http,$sce) {
     

    
    
    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.body = '<a class="navbar-brand" href="index.html">E-Commerce</a>'; 

    $scope.insertUser = function () {

        
        var myEL2 = angular.element(document.querySelectorAll("#error"));
        myEL2.empty();

        var myEL2 = angular.element(document.querySelectorAll("#exito"));
        myEL2.empty();
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
            if(respuesta.data=='OK'){
            console.log(respuesta.status);
            $scope.firstName = null;
            $scope.lastName = null;
            $scope.username = null;
            $scope.email = null;
            $scope.pass = null;
            $scope.age = null;
            $scope.gender = null;

            var myEl = angular.element( document.querySelector( '#container' ) );
            myEl.append('<div id="exito" style="margin-top: 50px;">Usuario registrado, haz click <a href="index.html">aqui</a> para volver al inicio</div');  
        
            }
            else{
                console.log(respuesta.data);
                var arrayDeCadenas = respuesta.data.split(' ');


                var myEl = angular.element( document.querySelector( '#container' ) );
                myEl.append('<div id="error" style="margin-top: 50px;">Error al registrar nuevo usuario,el ' + arrayDeCadenas[1] + ' ' + arrayDeCadenas[0] + ' ya existe</div>');  
                console.log(respuesta.data);
                
            }
        });
};
});