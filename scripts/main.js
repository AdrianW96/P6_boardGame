let activePlayer;
let inactivePlayer;
let player1;
let player2;

let defaultWeapon = {
    name: 'Rusty Sword',
    power: 10,
    class: 'weapon0'
};

let weapon1 = {
    name: 'Cheese',
    power: 20,
    class: 'weapon1'
};
let weapon2 = {
    name: 'Dagger',
    power: 15,
    class: 'weapon2'
};
let weapon3 = {
    name: 'Book',
    power: 25,
    class: 'weapon3'
};
let weapon4 = {
    name: 'Holy Stone',
    power: 30,
    class: 'weapon4'
};

$(document).ready(function() {
    const grid = new Grid('#board', 12, 12);
    const specialSpots = new SpecialBlocks(40, 4);
    player1 = new Player('player1icon', 100, defaultWeapon.name, defaultWeapon.power, {}, 'player1hover');
    player2 = new Player('player2icon', 100, defaultWeapon.name, defaultWeapon.power, {}, 'player2hover');

    activePlayer = player1;
    inactivePlayer = player2;

    $(activePlayer.locID).addClass('activePlayerBg');

    activePlayer.setViableMoveOptions();
});
