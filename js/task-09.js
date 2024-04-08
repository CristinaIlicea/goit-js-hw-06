let btnChange = document.querySelector(".button")
let showColorName = document.querySelector(".color")

btnChange.addEventListener("click", function(){
   let color = '#';
   //create random number and small the number with slice concat with color = #
   function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }   // select the body tag 
   document.body.style.backgroundColor = color
   // show the color name in screen 
   showColorName.innerHTML = color
})


