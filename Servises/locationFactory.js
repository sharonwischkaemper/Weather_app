angular
    .module('weatherApp')
    .factory('locationFactory', locationFactory);

locationFactory.$inject = ['$http'];

function locationFactory($http) {
    function getLocation() {
        return $http.get('https://api.wunderground.com/api/4431bf81f1b77bf9/geolookup/q/autoip.json')
            .then(function (response) {
                return response.data;
            })
            .catch(function (err) {
                return err;
            })
    }

    return {
        getLocation: getLocation
    }
}

