function updateTime() {


let richmondElement = document.querySelector("#richmond");
let richmondDateElement = richmondElement.querySelector(".date");
let richmondTimeElement = richmondElement.querySelector(".time");
let richmondTime = moment().tz("America/New_York");

richmondDateElement.innerHTML = richmondTime.format(`MMMM Do, YYYY`);
richmondTimeElement.innerHTML = richmondTime.format("h:mm:ss:SS [<small>]A[</small>]");




let monzaElement = document.querySelector("#monza");
let monzaDateElement = monzaElement.querySelector(".date");
let monzaTimeElement = monzaElement.querySelector(".time");
let monzaTime = moment().tz("Europe/Vatican");

monzaDateElement.innerHTML = monzaTime.format(`MMMM Do, YYYY`);
monzaTimeElement.innerHTML = monzaTime.format("h:mm:ss:SS [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
    <div class="time">${cityTime.format("h:mm:ss:SS")}<small>${cityTime.format("A")}</small></div>
</div>`;
}

updateTime();
setInterval(updateTime, 1);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);