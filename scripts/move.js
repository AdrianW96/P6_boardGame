// called when activePlayer clicks on a viable field
function move() {
    $('.col1').removeClass('viable');
    // Get the clicked cell values
    clickedCol = $(this).data('col');
    clickedRow = $(this).data('row');
    clickedCell = `#${clickedCol}-${clickedRow}`;

    $(activePlayer.locID).addClass('cell empty');
    // Remove Player from the old Cell
    $(activePlayer.locID).removeClass(activePlayer.name);
    // Set new location ID
    activePlayer.locID = `#${clickedCol}-${clickedRow}`;
    activePlayer.location.x = clickedCol;
    activePlayer.location.y = clickedRow;
    // Add Player to new Cell
    $(clickedCell).addClass(activePlayer.name);
    $(clickedCell).removeClass('cell empty');

    const hasWeapon = $(clickedCell).hasClass('weaponDisplayFix');
    // check for weapon on clicked cell
    if (hasWeapon === true) {
        if ($(clickedCell).hasClass('weapon1')) {
            activePlayer.attack = weapon1.power;
            $(clickedCell).removeClass('weapon1');
        } else if ($(clickedCell).hasClass('weapon2')) {
            activePlayer.attack = weapon2.power;
            $(clickedCell).removeClass('weapon2');
        } else if ($(clickedCell).hasClass('weapon3')) {
            activePlayer.attack = weapon3.power;
            $(clickedCell).removeClass('weapon3');
        } else if ($(clickedCell).hasClass('weapon4')) {
            activePlayer.attack = weapon4.power;
            $(clickedCell).removeClass('weapon4');
        }
        $(clickedCell)
            .removeClass('weaponDisplayFix')
            .empty();
        activePlayer.updateAttack();
    }

    changePlayer();
    activePlayer.setViableMoveOptions();
}

function changePlayer() {
    if (activePlayer === player1) {
        activePlayer = player2;
        inactivePlayer = player1;
    } else {
        activePlayer = player1;
        inactivePlayer = player2;
    }
}
