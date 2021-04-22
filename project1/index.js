const closeFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const mouthCover = document.querySelector(".mouth");
// console.log(mouthCover);

closeFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closeFace.classList.remove("active");
    mouthCover.classList.remove("active");
    body_background[0].style.backgroundColor = "pink";
  }
});

openFace.addEventListener("click", () => {
  if (closeFace.classList.contains("closed")) {
    closeFace.classList.add("active");
    openFace.classList.remove("active");
    mouthCover.classList.remove("active");
    body_background[0].style.backgroundColor = "red";
  }
});

openFace.addEventListener("click", () => {
  if (mouthCover.classList.contains("mouth")) {
    mouthCover.classList.add("active");
    openFace.classList.remove("active");
    closeFace.classList.remove("active");
    body_background[0].style.backgroundColor = "orange";
  }
});
mouthCover.addEventListener("click", () => {
  if (closeFace.classList.contains("closed")) {
    openFace.classList.remove("active");
    closeFace.classList.add("active");
    mouthCover.classList.remove("active");
    body_background[0].style.backgroundColor = "lime";
  }
});

var body_background = document.getElementsByTagName("body");
// console.log(body_background);
body_background[0].style.backgroundColor = "tan";
