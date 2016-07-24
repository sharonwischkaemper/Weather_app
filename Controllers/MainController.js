angular
    .module('weatherApp')
    .controller('MainController', MainController);


MainController.$inject = ['locationFactory', 'forcastFactory', '$http'];

function MainController(locationFactory, forcastFactory, $http) {
    var vm = this;

    locationFactory.getLocation().then(function (data) {
        vm.location = data.location;
        vm.city = data.location.city;
        vm.state = data.location.state;

        forcastFactory.getForcast(data.location.city, data.location.state).then(function (data) {
            vm.forecast = data.forecast;
            vm.celsius = data.forecast.simpleforecast.forecastday[3].high.celsius;
            vm.currentDegrees = fahrenheit;
        })
    })




    vm.temp = 'fahrenheit';
    vm.tempSymbol = 'C';

    vm.toggleTemp = function () {
        if (vm.temp == 'fahrenheit') {
            vm.temp = 'celsius';
            vm.tempSymbol = 'C';
        } else {
            vm.temp = 'fahrenheit';
            vm.tempSymbol = 'C';


        }


    }

}

