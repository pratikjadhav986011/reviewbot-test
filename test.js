function login(password) {
    console.log("Password:", password);

    if (password == "123456") {
        return true;
    }

    return false;
}

const userInput = prompt("Enter JS code:");
eval(userInput);