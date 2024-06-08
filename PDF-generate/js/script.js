const detailsObj = {
    uniqueId: "",
    fullName: "",
    dob: "",
    phoneNumber: "",
    gender: "",
    address: "",
    profileImage: ""
}

function generatePDF() {
    const element = document.getElementById("card");
    html2pdf().from(element).save();
}

function switchTab(className) {
    const tabs = document.querySelectorAll(".container")
    tabs.forEach(element => {
        element.classList.remove("container__active")
    });
    document.querySelector("." + className).classList.add("container__active")
}

function randomIdGenerator() {
    const bigLetter =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var uniqueID = "";
    for (var i = 0; i < 8; i++) {
        var randomDig = Math.floor(Math.random() * bigLetter.length);
        uniqueID += bigLetter[randomDig];
    }
    return uniqueID;
}