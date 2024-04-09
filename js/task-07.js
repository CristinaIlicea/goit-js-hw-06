var slider = document.getElementById('font-size-control');
const text = document.getElementById('.text')

slider.addEventListener('input', function() {
    var size = slider.value;
    // this sets the body's font size property, but you can set whatever you need to
    text.style.fontSize = size + "px";
});