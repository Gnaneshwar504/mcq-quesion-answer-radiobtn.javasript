let formEl = document.getElementById("questionsForm");
let hyderabadEl = document.getElementById("cityHyderabad");
let chennaiEl = document.getElementById("cityChennai");
let delhiEl = document.getElementById("cityDelhi");
let mumbaiEl = document.getElementById("cityMumbai");
let btnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("resultMsg");


let capitalCity = "Delhi";
let selectedCity = "null";

hyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
chennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
delhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
mumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === "null") {
        resultEl.textContent = "pls select the city";
        resultEl.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultEl.textContent = "correc answer";
        resultEl.style.color = "#2b9a40"

    } else {
        resultEl.textContent = "wrng";
        resultEl.style, color = "#dc3545"
    }
});
