# wc-weather-06

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Description
In this assignment I worked to create an application for forecasting weather in an area based upon user input.  The user submits the name of a town or city which is then fed into an API to acquire a relevant latitude and longitude.  The latitude and longitude are then fed into another API designed to gather weather data regarding the area.  While incomplete, my work on this assignment instructed me in the complexity of assigning HTML elements adaptively through the use of JavaScript.