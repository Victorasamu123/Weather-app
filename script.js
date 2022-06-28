async function getUrl(){
    let cityName = document.getElementById("city").value;
    let tempCity = document.getElementById("temp");
    let presCity =  document.getElementById("presure");
    let humCity =  document.getElementById("humdity");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=09756d60b2011a99fb389f6e43e766cc`;
    const response = await fetch(url);
    const getResponse = await response.json();
    tempCity.innerHTML = JSON.stringify(Math.round(getResponse.main.temp-273)+" °c");
    presCity.innerHTML = JSON.stringify(getResponse.main.pressure);
    humCity.innerHTML = JSON.stringify(getResponse.main.humidity);
    console.log(getResponse);
}