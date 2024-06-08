function renderCard() {
    for (keys in detailsObj) {
        const element = document.querySelector(`[data-detail-id='${keys}']`)
        if (keys == "profileImage") {
            element.setAttribute('src', detailsObj[keys])
        } else {
            element.innerText = detailsObj[keys];
        }
    }
}