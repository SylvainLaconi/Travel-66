const img = document.querySelectorAll('#imgs img');
const imgs = document.getElementById("imgs");
let idx = 0;

let interval = setInterval(run, 2000);

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
  for(let i in img){
    imgs.style.transform = `translateX(${-idx * img[i].width}px)`;
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}