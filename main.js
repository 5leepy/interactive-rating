// const rateCard = document.querySelector(".rate")
// const thanksCard = document.querySelector(".thanks")
// const submitButton = document.getElementById("submit")


document.getElementById("submit").addEventListener("click", function () {
    document.querySelector(".rate").classList.add("hidden");
    document.querySelector(".thanks").classList.remove("hidden");
});

document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("click", function () {
        var rating = button.textContent;
        document.getElementById("rating").innerHTML = rating;
    });
});