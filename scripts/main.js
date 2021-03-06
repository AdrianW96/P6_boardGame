// Initialize game + eventListeners

let activePlayer;
let inactivePlayer;
let player1;
let player2;
let gameModeChanged = false;

// Weapon Objects
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
    // Create Grid, Obstacles and Players
    new Grid('#board', 12, 12);
    new SpecialBlocks(30, 4);
    player1 = new Player('player1icon', 100, defaultWeapon.name, defaultWeapon.power, {}, 'player1hover', 'btnsP1', false);
    player2 = new Player('player2icon', 100, defaultWeapon.name, defaultWeapon.power, {}, 'player2hover', 'btnsP2', false);

    activePlayer = player1;
    inactivePlayer = player2;

    // Add class to show background of active player
    $(activePlayer.locID).addClass('activePlayerBg');

    // Initialize viable moving options
    activePlayer.setViableMoveOptions();

    // Hide fighting buttons
    $('.btnsP1').addClass('hidden');
    $('.btnsP2').addClass('hidden');

    // Event Listeners for the Fight Buttons
    $('.P1attack').on('click', function() {
        if (player2.isDefending === false) {
            player2.health = player2.health - player1.attack;
        } else {
            player2.health = player2.health - player1.attack / 2;
            player2.isDefending = false;
        }

        changePlayer();
        player2.updateHealth();
        checkGameOver();
    });

    $('.P2attack').on('click', function() {
        if (player1.isDefending === false) {
            player1.health = player1.health - player2.attack;
        } else {
            player1.health = player1.health - player2.attack / 2;
            player1.isDefending = false;
        }

        changePlayer();
        player1.updateHealth();
        checkGameOver();
    });

    $('.P2defend').on('click', function() {
        player2.isDefending = true;
        changePlayer();
    });

    $('.P1defend').on('click', function() {
        player1.isDefending = true;
        changePlayer();
    });
});
