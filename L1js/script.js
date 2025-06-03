const userName = prompt("Будь ласка, введіть ваше ім'я:");
const userAgeInput = prompt("Будь ласка, введіть ваш вік:");

const userAge = parseInt(userAgeInput);

if (userName === null || userAgeInput === null || isNaN(userAge)) {
    alert("Не вдалося отримати ваші дані або введено некоректний вік. You are not allowed to visit this website.");
} else {
    if (userAge < 18) {
        alert("You are not allowed to visit this website.");
    } else if (userAge >= 18 && userAge <= 22) {
        const wantsToContinue = confirm("Are you sure you want to continue?");
        if (wantsToContinue) {
            alert("Welcome, " + userName + "!");
        } else {
            alert("You are not allowed to visit this website.");
               }
    } 
    else {
        alert("Welcome, " + userName + "!");
         }
}