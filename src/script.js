//Carrousel homepage

const imgs = document.getElementById('imgs');
  
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 1900}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

//API weather

let url = "http://api.weatherapi.com/v1/current.json?key=45be172a2d174c11abf101113211903&q=Los Angeles&aqi=no&lang=fr";

fetch(url).then((response) => response.json().then((data) => console.log(data, data.location.name, data.location.region, data.current.temp_c, data.current.condition.text, data.current.condition.icon)));
