
function rollDice() {
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const noOfDice = document.getElementById("noOfDice").value;
    

    const values = [];
    const images = [];

    for ( let i = 0; i < noOfDice; i++ ) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_imgs/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);

}