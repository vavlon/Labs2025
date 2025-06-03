function createNewUser() {
    const inputFirstName = prompt("Будь ласка, введіть ваше ім'я:");
    const inputLastName = prompt("Будь ласка, введіть ваше прізвище:");

    const newUser = {
        firstName: inputFirstName || "", 
        lastName: inputLastName || "",   

        getLogin: function() {
            const firstInitial = this.firstName.length > 0 ? this.firstName.charAt(0) : '';
            const lastNamePart = this.lastName;
            
            return (firstInitial + lastNamePart).toLowerCase();
        }
    };

    return newUser;
}

const user1 = createNewUser();

const user1Login = user1.getLogin();

console.log("Створений користувач:", user1); 
console.log("Логін користувача:", user1Login);
