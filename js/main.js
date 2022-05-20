const numberContainer = document.getElementById("numbers")

// ciclo
for (let i = 1; i <= 100; i++) {

    // se entrambe le condizioni sono vere
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        numberContainer.innerHTML += `<div class="col-2">FizzBuzz</div>`

    // se è solo multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        numberContainer.innerHTML += `<div class="col-2">Buzz</div>`

    // se è solo multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        numberContainer.innerHTML += `<div class="col-2">Fizz</div>`

    // se non è multiplo di 5 o 3
    } else {
        console.log(i);
        numberContainer.innerHTML += `<div class="col-2">${i}</div>`
    }
}