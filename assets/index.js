const searchButton = document.getElementById('search-btn');
const searchHistory = document.getElementById('search-history');
let city = document.getElementById('city').value;
let cityList = [localStorage.getItem('cityName')];
let lat = null;
let lon = null;

// currently set to Long Valley Latitutde/Longitude, sub in variables for responsive functionality
let weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=0d255d14ef9f7866b4a1960fdfcc2a1c";
// currently set to London, sub in text input from search feature
let geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=0d255d14ef9f7866b4a1960fdfcc2a1c";

// restructure
searchButton.addEventListener('click', () => {
    //handles the acquisition of the coordinates from geoAPI
    console.log(geoAPI);
    localStorage.setItem('cityName', city.value);
    localStorage.setItem('lat', geoAPI.city.coord.lat);
    localStorage.setItem('lon', geoAPI.city.coord.lon);

    //appends the recent search to the list of prior searches
    var newListItem = document.createElement("li");
    //create new text node
    var listValue = document.createTextNode(i);
    //add text node to li element
    newListItem.appendChild(listValue);
    //add new list element built in previous steps to unordered list
    searchHistory.appendChild(newListItem);
})



fetch(weatherAPI, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

fetch(geoAPI, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

searchButton.addEventListener('click', () => {
    localStorage.setItem('location', city);

})