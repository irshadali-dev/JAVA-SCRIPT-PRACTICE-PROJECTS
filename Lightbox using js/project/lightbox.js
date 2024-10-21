// function to include hTML popup

function includePopupHTML() {
  let html =
    '<div id="popUp"><span id="close" onclick="closePopUp()"><img id="npop" src="/Lightbox/project/images/close.png" alt="" /></span><img id="leftArrow" src="project/images/left-arrow.png" alt="" /><img id="rightArrow" src="project/images/right-arrow.png" alt="" /><img id="mainPopImage"src="./images/apple-imac-ipad-workplace-38568.webp"alt=""/></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;
  document.body.insertBefore(popdiv, document.body.firstChild);
}
let img;
let current;

// function to init plugin
function imagePopupInit(target) {
  //  select with all image class target

  img = document.getElementsByClassName(target);

  //   add eventlistner all selected images
  for (var i = 0; i < img.length; i++) {
    // add pointer
    img[i].style.cursor = "pointer";

    // add eventlistner
    img[i].addEventListener("click", function () {
      document.getElementById("mainPopImage").src = this.src;
      document.getElementById("popUp").style.display = "block";
      checkArrow();
    });
  }
  includePopupHTML();

  //   next button
  document.getElementById("rightArrow").addEventListener("click", function () {
    nextimg();
  });

  //   prev button
  document.getElementById("leftArrow").addEventListener("click", function () {
    previmg();
  });
}

// close button
function closePopUp() {
  document.getElementById("mainPopImage").src = "";
  document.getElementById("popUp").style.display = "none";
}

// next image
function nextimg() {
  getCurrentImage();
  current++;
  document.getElementById("mainPopImage").src = img[current].src;
  checkArrow();
}
// prev image
function previmg() {
  getCurrentImage();
  current--;
  document.getElementById("mainPopImage").src = img[current].src;
  checkArrow();
}

function getCurrentImage() {
  for (var i = 0; i < img.length; i++) {
    if (img[i].src == document.getElementById("mainPopImage").src) {
      current = i;
    }
  }
}

function checkArrow() {
  getCurrentImage();
  if (current == "0") {
    document.getElementById("leftArrow").style.display = "none";
    document.getElementById("rightArrow").style.display = "block";
  } else if (current == img.length - 1) {
    document.getElementById("rightArrow").style.display = "none";
    document.getElementById("leftArrow").style.display = "block";
  } else {
    document.getElementById("leftArrow").style.display = "block";
    document.getElementById("rightArrow").style.display = "block";
  }
}
