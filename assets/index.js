const searchButton = document.getElementById('search-btn');
let city = document.getElementById('city').value;

// currently set to Long Valley Latitutde/Longitude, sub in variables for responsive functionality
let weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=40.78&lon=-74.78&appid=0d255d14ef9f7866b4a1960fdfcc2a1c";
// currently set to London, sub in text input from search feature
let geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=0d255d14ef9f7866b4a1960fdfcc2a1c";

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