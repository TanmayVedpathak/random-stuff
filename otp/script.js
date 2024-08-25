const otpInput = document.querySelectorAll(".otp_input");

otpInput.forEach(input => {
    input.addEventListener("input", function (event) {
        const num = event.target.value;
        if (num.length === 1) {
            if (input.nextElementSibling) {
                input.nextElementSibling.focus();
            } else {
                input.blur();
            }
        } else if (num.length === 0) {
            if (input.previousElementSibling) {
                input.previousElementSibling.focus();
            } else {
                input.blur();
            }
        }
    })
});