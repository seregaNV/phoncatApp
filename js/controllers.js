//'use strict';
//
//var phonecatApp = angular.module('phonecatApp', []);
//
//phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {
//
//    $http.get('phones/phones.json').success(function(data, status, headers, config) {
//        $scope.phones = data;
//    });
//
//}]);



(function() {
    'use strict';
    function PhoneListCtrl($scope, $http, $location, Phone) {
        //console.log('$location.url() - ', $location.url());
        //console.log('$location.path() - ', $location.path());
        //console.log('$location.search() - ', $location.search());
        //console.log('$location.hash() - ', $location.hash());

        /*$http.get('phones/phones.json').success(function(data, status, headers, config) {
            $scope.phones = data;
        });*/
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';

        /*Phone.query({phoneId: 'phones'}, function(data) {
            $scope.phones = data;
        })*/

        /*відправляє запрос http.get ожидає в відповідь масів в форматі json. використовується для отримання колекції елементів
        Phone.query(params, successcb, errorcb)
        відправляє запрос http.get ожидає в відповідь об'єкт в форматі json. використовується для отримання єдиного елемента
        Phone.get(params, successcb, errorcb)
        відправляє запрос http.post в тілі якого передає данні із аргуиента payloadData
        Phone.save(params, payloadData, successcb, errorcb)
        виконує запрос http.delete
        Phone.delete(params, successcb, errorcb)*/
    }
    function AboutCtrl($scope, $http, $location) {
    }
    function ContactCtrl($scope, $http, $location) {
    }
    function PhoneDetailCtrl($scope, $http, $location, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
    angular.module('phonecatApp').controller('PhoneListCtrl', ['$scope', '$http', '$location', 'Phone', PhoneListCtrl]);
    angular.module('phonecatApp').controller('AboutCtrl', ['$scope', '$http', '$location', AboutCtrl]);
    angular.module('phonecatApp').controller('ContactCtrl', ['$scope', '$http', '$location', ContactCtrl]);
    angular.module('phonecatApp').controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', 'Phone', PhoneDetailCtrl]);
})();