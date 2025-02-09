const prompts = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let promptIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById("noButton");
    const btnYes = document.getElementById("yesButton");

    if (btnNo) {
        btnNo.addEventListener("click", function () {
            if (promptIndex < prompts.length - 1) {
                promptIndex++;
            }
            btnNo.textContent = prompts[promptIndex];
        });
    }

    if (btnYes) {
        btnYes.addEventListener("click", function () {
            window.location.href = "yes_page.html";
        });
    }
});
