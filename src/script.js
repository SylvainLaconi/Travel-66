//Carrousel homepage

const imgs = document.getElementById('imgs');
  
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } 
for(let i in img){
  imgs.style.transform = `translateX(${-idx * img[i].width}px)`;
}
  
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

//API weather

let urlLosAngeles = "https://api.weatherapi.com/v1/current.json?key=45be172a2d174c11abf101113211903&q=Los Angeles&aqi=no&lang=fr";

let meteoLosAngeles = document.getElementById("meteo");

let iconeMeteo = document.getElementById("icone-meteo");

fetch(urlLosAngeles).then((response) => response.json().then((data) => {
meteoLosAngeles.innerHTML = `Le ciel de ${data.location.name}, ${data.location.region} est ${data.current.condition.text.toLowerCase()}. La température est de ${data.current.temp_c}°C.`;
iconeMeteo.src = `http:${data.current.condition.icon}`}));


//Effet parallax

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
  parallax.style.backgroundPositionY = -window.scrollY / 2 + "px"; 
})

