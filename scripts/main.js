var activePlayer;
var inactivePlayer;
var player1;
var player2;
$(document).ready(function() {
    const grid = new Grid('#board', 12, 12);
    const specialSpots = new SpecialBlocks(30, 4);
    player1 = new Player('player1icon', 100, 10, {});
    player2 = new Player('player2icon', 100, 10, {});

    activePlayer = player1;
    inactivePlayer = player2;

    activePlayer.setViableMoveOptions();
});
