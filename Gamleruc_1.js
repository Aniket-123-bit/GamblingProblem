//uc1
console.log("-------Welcome to Gambling Simulation--------");
const EVERY_DAY_STAKE = 100;
const EVERY_DAY_BET = 1;
console.log("Enter the gambler position");
    let checkVal = Math.floor(Math.random() * 10) % 3;

        if (checkVal > 0.5)
        {
            console.log("The Gambler wins the bet.");
        }
        else if (checkVal <= 0.5)
        {
            console.log("The Gambler loses the bet.");
        }