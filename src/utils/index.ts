export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
}

export const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}
