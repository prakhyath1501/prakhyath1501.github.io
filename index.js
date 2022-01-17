const likeBtn = document.querySelector(".btn");
const likeIcon = document.querySelector("#icon");
const count = document.querySelector("#count")

let clicked = false;

likeBtn.addEventListener("click", ()=>{
  if (!clicked){
    clicked = true;
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
  }
  else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
  }
  
});