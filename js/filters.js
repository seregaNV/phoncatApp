(function() {
    'use strict';
    function checkMark() {
        return function(input) {
            //console.log(input);
            return input ? '\u2714' : '\u2718';
        }
    }
    angular.module('phonecatApp').filter('checkMark', checkMark);
})();