function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Помилка: Ділення на нуль неможливе!";
            }
            result = num1 / num2;
            break;
        default:
            return "Помилка: Невідома операція. Доступні операції: +, -, *, /";
    }
    return result;
}

const number1String = prompt("Введіть перше число:");
const number2String = prompt("Введіть друге число:");
const operationSymbol = prompt("Введіть математичну операцію (+, -, *, /):");

const number1 = parseFloat(number1String);
const number2 = parseFloat(number2String);

if (isNaN(number1) || isNaN(number2)) {
    console.log("Помилка: Одне або обидва введені значення не є числами. Будь ласка, перезавантажте сторінку та спробуйте ще раз.");
} else if (operationSymbol === null || operationSymbol.trim() === "") {
    console.log("Помилка: Операцію не було введено. Будь ласка, перезавантажте сторінку та спробуйте ще раз.");
}
else {
    const calculationResult = calculate(number1, number2, operationSymbol);

    console.log(`Результат операції: ${number1} ${operationSymbol} ${number2} = ${calculationResult}`);
}