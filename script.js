const messages = [
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

let messageIndex = 0;

// Get DOM elements
const proposalCard = document.getElementById("proposalCard");
const closeBtn = document.getElementById("closeBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Close button functionality
closeBtn.addEventListener("click", () => {
    proposalCard.style.animation = "fadeOut 0.4s forwards";
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
    message.textContent = "yes_page.html";
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";
});

// No button functionality
noBtn.addEventListener("click", () => {
    message.textContent = messages[messageIndex];
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";
});
