let long = document.getElementById("lon");
let latt = document.getElementById("lat");
async function getData(){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    console.log(position.coords.latitude)
                    latt.innerHTML = JSON.stringify("Latitude: " +position.coords.latitude)
                    long.innerHTML = JSON.stringify("Longitude: "+position.coords.longitude);
                    
                }
            )
}

async function getUrl(){
let cityName = document.getElementById("city").value;
let tempCity = document.getElementById("temp");
let presCity =  document.getElementById("presure");
let humCity =  document.getElementById("humidity");
let county = document.getElementById("con");
let townName = document.getElementById("town")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=80b833690e8542ee89d8f5b9bd05aa04`;
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
// const response = await fetch(url);
    // 
    