let activePlayer;
let inactivePlayer;
let player1;
let player2;

let weapon1 = {
    name: 'Cheese',
    power: 20
};
let weapon2 = {
    name: 'Dagger',
    power: 15
};
let weapon3 = {
    name: 'Wisdom',
    power: 25
};
let weapon4 = {
    name: 'Holy Stone',
    power: 30
};

$(document).ready(function() {
    const grid = new Grid('#board', 12, 12);
    const specialSpots = new SpecialBlocks(40, 4);
    player1 = new Player('player1icon', 100, 10, {});
    player2 = new Player('player2icon', 100, 10, {});

    activePlayer = player1;
    inactivePlayer = player2;

    activePlayer.setViableMoveOptions();
});
