function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("H:mm:ss");

  let marylandElement = document.querySelector("#maryland");
  let marylandDateElement = marylandElement.querySelector(".date");
  let marylandTimeElement = marylandElement.querySelector(".time");
  let marylandTime = moment().tz("America/New_York");
  marylandDateElement.innerHTML = marylandTime.format("MMMM Do YYYY");
  marylandTimeElement.innerHTML = marylandTime.format("H:mm:ss");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" id="cities">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("H:mm:ss")}</div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
