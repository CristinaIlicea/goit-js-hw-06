document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const counterElement = document.getElementById("value");

    let counterValue = 0;

    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    decrementButton.addEventListener("click", function() {
        counterValue--;
        updateCounter();
    });

    incrementButton.addEventListener("click", function() {
        counterValue++;
        updateCounter();
    });
});


