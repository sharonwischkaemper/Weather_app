angular
    .module('weatherApp')
    .controller('MainController', MainController);

                   
MainController.$inject = ['locationFactory','forcastFactory','$http'];

function MainController(locationFactory, forcastFactory, $http){
    var vm = this;
    
    locationFactory.getLocation().then(function(data){
        vm.location = data.location;
    
    })
 

   // forcastFactory.getForcast().then(function(data){
       // vm.forcast = data.temp;
    
    //})
 
}

