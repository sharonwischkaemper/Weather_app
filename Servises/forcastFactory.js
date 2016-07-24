angular
    .module('weatherApp')
    .factory('forcastFactory', forcastFactory);

forcastFactory.$inject = ['$http'];

function forcastFactory($http) {
    function getForcast(city, state) {
        var url = 'http://api.wunderground.com/api/4431bf81f1b77bf9/forecast/q/' + state + '/' + city + '.json';
        return $http.get(url)
            .then(function (response) {
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