const userInputString = prompt("Будь ласка, введіть число (верхню межу діапазону):");


const upperLimit = parseInt(userInputString);


if (isNaN(upperLimit)) {
    console.log("Введено некоректне значення. Будь ласка, перезавантажте сторінку та введіть число.");
} else {
    let foundMultiple = false; 

    console.log(`Числа, кратні 5, від 0 до ${upperLimit}:`);

 
    for (let i = 0; i <= upperLimit; i++) {
        if (i % 5 === 0) {
            console.log(i);
            foundMultiple = true; 
        }
    }

    if (!foundMultiple) {
        console.log("Sorry, no numbers");
    }
}