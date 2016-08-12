var weatherApp = angular.module('weatherApp',[]);

weatherApp.controller('weatherController', 
  ['weatherAppSvc', function(weatherAppSvc) {
    var weatherData = this;
    
    //list if cities
    weatherData.cityList = [
        { cityName:'Vienna',    id: 2761369},
        { cityName:'Frankfurt', id: 2925533},
        { cityName:'Stockholm', id: 2673730},
        { cityName:'London',    id: 2643743},
        { cityName:'Miami',     id: 4164138},
    ];

    //get weather data for selected city
    weatherData.getData = function(city) {
        weatherAppSvc.getCurrentWeather(city.id).then(function(data) {
            //we have data, 
            weatherData.cityName  = data.data.name;
            maxTemp   = data.data.main.temp_max;
            minTemp   = data.data.main.temp_min;
            weatherData.currentCityId = city.id;
            weatherData.windSpeed = data.data.wind.speed;
            weatherData.avgTemp = (maxTemp+minTemp)/2 
        });
    }    

    //get 24 hr forecast for selected city
    weatherData.getForecastData = function(cityId) {
        weatherData.foreCast = [];

        weatherAppSvc.getCurrentForecast(cityId).then(function(data) {
          var tempList = data.data.list;
          var i =0, 
              listSize = tempList.length;

          for( i = 0; i< listSize; i++)   {
            if (i === 7) break; //
            dtTime = tempList[i].dt_txt.split(' ')[1];
            dtTime = dtTime.split(':')[0];
      
                
            // time portion of date is in the format 00:00:00 in military form
            // here we 
            if (dtTime > 12) {
                dtTime = dtTime - 12;
                dtTime = dtTime + ' PM';
            } else {
                dtTime = dtTime + ' AM';
            }
            weatherData.foreCast.push({ evtTime: dtTime, evtTemp: tempList[i].main.temp});              
          }
        });
    };
    

    // define function to intialize app with data for city '2761369' (vienna)
    weatherData.init = function() {
      var defaultCity ={ id: 2761369};
      weatherData.getData(defaultCity); //intialize
    }

    //call func to intialize app
    weatherData.init();
}]);

