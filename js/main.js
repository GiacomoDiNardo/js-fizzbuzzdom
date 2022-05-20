// ciclo
for (let i = 1; i <= 100; i++) {

    // se entrambe le condizioni sono vere
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    // se è solo multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");

    // se è solo multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");

    // se non è multiplo di 5 o 3
    } else {
        console.log(i);
    }
}