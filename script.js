async function getUrl(){
    let cityName = document.getElementById("city").value;
    let tempCity = document.getElementById("temp");
    let presCity =  document.getElementById("presure");
    let humCity =  document.getElementById("humidity");
    let long = document.getElementById("lon");
    let latt = document.getElementById("lat");
    let county = document.getElementById("con");
    let townName = document.getElementById("town")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc`;
    const response = await fetch(url);
    const getResponse = await response.json();
    tempCity.innerHTML = JSON.stringify(`${Math.round(getResponse.main.temp-273)} °c `);
    presCity.innerHTML = JSON.stringify("Pressure: " +getResponse.main.pressure);
    humCity.innerHTML = JSON.stringify("Humidity: " +getResponse.main.humidity +"%");
    long.innerHTML = JSON.stringify("Longitude: "+ getResponse.coord.lon);
    latt.innerHTML = JSON.stringify("Latitude: " +getResponse.coord.lat);
    county.innerHTML = JSON.stringify("Country: " +getResponse.sys.country);
    townName.innerHTML = JSON.stringify(getResponse.name);
    console.log(getResponse);
}