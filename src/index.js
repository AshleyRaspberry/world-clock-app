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
updateTime();
setInterval(updateTime, 1);