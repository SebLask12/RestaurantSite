const logIn = document.getElementById("log-in");
const overlay = document.querySelector('.overlay');
function openLogForm() {
    logIn.style.display = "block";
    overlay.classList.remove('hidden');
}

function closeLogForm() {
    logIn.style.display = "none";
    overlay.classList.add('hidden');
}