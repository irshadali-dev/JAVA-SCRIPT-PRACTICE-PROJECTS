let flag = 0;

function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

slideShow(flag);
function slideShow(index) {
  let slides = document.getElementsByClassName("slide");
  console.log(slides);

  if (index == slides.length) {
    flag = 0;
    index = 0;
  }
  if (index < 0) {
    flag = slides.length - 1;
    index = slides.length - 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[index].style.display = "block";
}
