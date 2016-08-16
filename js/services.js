// serivce for ferching data from api
(function() {
angular.module('weatherApp').
factory('weatherAppSvc', ['$http', function($http) {
    var baseUrl = 'http://api.openweathermap.org/data/2.5/'; //api base url
    var appId = '65bdbec9fb55203228d0221163ffdbc5'; // api key for openwethermap

    return {  
      	// - get weather data for selected city
      	getCurrentWeather: function(cityId) {
      		return $http.jsonp(baseUrl+'/weather?id='+cityId+'&units=imperial&mode=json&APPID='+appId+'&callback=JSON_CALLBACK');
      	},

      	// - get 24 hour forecast for selected city
      	getCurrentForecast: function(cityId) {
      		return $http.jsonp(baseUrl+'forecast?id='+cityId+'&units=imperial&mode=json&APPID='+appId+'&callback=JSON_CALLBACK');
      	}
    }  
}])
})();