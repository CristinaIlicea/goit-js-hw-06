var slider = document.getElementById('font-size-control');

slider.addEventListener('input', function() {
    var size = slider.value;
    // this sets the body's font size property, but you can set whatever you need to
    document.body.style.fontSize = size + "px";
});