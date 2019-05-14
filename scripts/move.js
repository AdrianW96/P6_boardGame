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
