angular
    .module('weatherApp')
    .factory('forcastFactory', forcastFactory);

forcastFactory.$inject = ['$http'];

function forcastFactory($http) {
    function getForcast() {
        return $http.get('http://api.wunderground.com/api/aaa11a4881a07ac5/forecast/q/LA/Mandeville.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function (err) {
                return err;
            })
    }

    return {
        getForcast: getForcast
    }
}
//http://api.wunderground.com/api/aaa11a4881a07ac5/forecast/q/.json