var slider = document.getElementById("font-size-control");

slider.addEventListener("input", function() {
    var size = slider.value;
    let text = document.getElementById("text")
    // this sets the body's font size property, but you can set whatever you need to
   text.style.fontSize = size + "px";
});