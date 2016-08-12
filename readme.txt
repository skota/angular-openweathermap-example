Intro
---------
The app is a singlepage app as requested.
There are no route components used. All data is fetched from api via angulars http object.
No backend is neccessary. Jsonp rquests are used to get past cors issues.


USAGE
-----
extract zip file in desired dev folder. open index.html in browser.


STRUCTURE
-------------
App folder structure is as follows

wetherapp
-- css
-- js
-- lib

css  	- contains all stylesheets. Bootstrap is used for styling.
js 		- contains app.js and services.js
lib 	- contains minified angularjs file


FILES
-----------
js/app.js
---------
contains main logic for app. Main controller 'weatherController' is defined here.

Controller has an init method that setups intial data for page. The following data is loaded
1 - list of 5 cities
2 - Weatherdata for city 1 (vienna) , so we dont start with a blank screen.
3 - get the wind speed and average temperature


there are 2 methods that fetch weather and forecast data for a selected city. Both these methods utilize 'weatherAppSvc' defined in services.js


js/services.js
---------
defines methods

getCurrentWeather 	: Get weather data for selected city
getCurrentForecast	: Get 5 day forecast for selected city

both methods used angular http.jsonp call and return promises.

