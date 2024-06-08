const submitBtn = document.getElementById("submit__btn");
const downloadBtn = document.getElementById("download__btn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const inputFields = document.querySelectorAll("[data-input-id]");
    inputFields.forEach(element => {
        detailsObj[element.getAttribute('data-input-id')] = element.value
    });
    detailsObj.uniqueId = randomIdGenerator();
    renderCard();
    switchTab('card');
})

downloadBtn.addEventListener("click", function (e) {
    generatePDF();
})