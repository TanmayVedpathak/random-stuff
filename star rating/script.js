const starRadio = [...document.getElementsByClassName("starRadio")]
var rating = 0

starRadio.forEach(element => {
    element.addEventListener("click", (e) => {
        rating = e.target.value
        console.log("rating", rating)
    })
});
