angular
    .module('weatherApp')
    .factory('ImgFactory', ImgFactory);

ImgFactory.$inject = ['$http'];

function ImgFactory($http){
    function getImg(){
        return $http.get('')
    }

}
