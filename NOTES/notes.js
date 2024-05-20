document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasExample');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("OpenMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });

// const light  = document.querySelector("#light")
// const dark =  document.querySelector("#dark")
// const top_heading = document.querySelector(".top_heading")

// light.addEventListener("click", (e)=>{
//   document.body.style.backgroundColor ="white"
//   document.body.style.color ="black"
//   document.body.style.transition = "all 2s"
//   top_heading.style.backgroundColor = "white"
//   top_heading.style.color = "black"
// })
// dark.addEventListener("click", (e)=>{
//   document.body.style.backgroundColor ="black"
//   document.body.style.color ="white"
//   document.body.style.transition = "all 2s"
//   top_heading.style.backgroundColor = "black"
//   top_heading.style.color = "white"
// })

const top_heading = document.querySelector(".top_heading")
const themeSwitch = document.querySelector("#themeSwitch")
const main =  document.querySelector(".main")
const offcanvasExample = document.querySelector("#offcanvasExample")

let themeColor = true


themeSwitch.addEventListener("click", (e)=>{

  themeColor = !themeColor


  if(themeColor){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.body.style.transition =  "all 2s"

    main.style.borderColor = "white"

    top_heading.style.backgroundColor = "black"
    top_heading.style.color = "white"
    top_heading.style.transition =  "all 2s"


    themeSwitch.style.borderColor = "white"
    themeSwitch.innerHTML = `<i class="fa-solid fa-sun"></i>`
  }
  else{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.body.style.transition =  "all 2s"

    main.style.borderColor = "black"

    top_heading.style.backgroundColor = "white"
    top_heading.style.color = "black"
    top_heading.style.transition =  "all 2s"


    themeSwitch.style.borderColor = "black"
    themeSwitch.innerHTML = `<i class="fa-solid fa-moon"></i>`
  }
  


})



