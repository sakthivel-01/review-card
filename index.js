const
    rating = document.getElementById("ask-rating"),
    review = document.getElementById("result-rating"),
    sumbitBtn = document.getElementById("submit-btn"),
    selection = document.getElementById("selection"),
    rates = document.querySelectorAll(".number");

review.style.setProperty("display", "none")

sumbitBtn.addEventListener("click", () => {
    rating.style.display = 'none';
    review.style.removeProperty("display")
})

for (const rate of rates) {
    rate.addEventListener("click", e => {
        selection.innerText = e.target.innerText;
    })
}