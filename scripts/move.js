// called when activePlayer clicks on a viable field
function move() {
    // Remove bg to show who's turn it is
    $(activePlayer.locID).removeClass('activePlayerBg');
    // Remove all previous viable moving options
    $('.col1').removeClass('viable');
    // Get the clicked cell values
    clickedCol = $(this).data('col');
    clickedRow = $(this).data('row');
    clickedCell = `#${clickedCol}-${clickedRow}`;

    $(activePlayer.locID).addClass('cell empty');
    // Remove Player from the old Cell
    $(activePlayer.locID).removeClass(activePlayer.name);

    if ($(activePlayer.locID).children().length > 0) {
        $(activePlayer.locID)
            .children()
            .css('visibility', 'visible');
    }

    // Set new location ID
    activePlayer.locID = `#${clickedCol}-${clickedRow}`;
    activePlayer.location.x = clickedCol;
    activePlayer.location.y = clickedRow;
    // Add Player to new Cell
    $(clickedCell).addClass(activePlayer.name);
    $(clickedCell).removeClass(activePlayer.hoverClass, 'cell empty');

    //Check if there's a player nearby to start a fight
    activePlayer.checkForFight(clickedCol, clickedRow);

    const hasWeapon = $(clickedCell).hasClass('weaponDisplayFix');
    // Check if there's a weapon on the cell clicked
    if (hasWeapon === true) {
        if ($(clickedCell).hasClass('weapon1')) {
            activePlayer.attack = weapon1.power;
            // Remove old weapon picture from the cell
            $(clickedCell).empty();
            // Drop the old weapon on the cell
            dropOldWeapon(clickedCell);
            // Update equippedWeapon property of activePlayer (needs to be done after dropping the old one bc it checks for equippedWeapon inside the function)
            activePlayer.equippedWeapon = weapon1.name;
            $(clickedCell).removeClass('weapon1');
        } else if ($(clickedCell).hasClass('weapon2')) {
            activePlayer.attack = weapon2.power;
            $(clickedCell).empty();
            dropOldWeapon(clickedCell);
            activePlayer.equippedWeapon = weapon2.name;
            $(clickedCell).removeClass('weapon2');
        } else if ($(clickedCell).hasClass('weapon3')) {
            activePlayer.attack = weapon3.power;
            $(clickedCell).empty();
            dropOldWeapon(clickedCell);
            activePlayer.equippedWeapon = weapon3.name;
            $(clickedCell).removeClass('weapon3');
        } else if ($(clickedCell).hasClass('weapon4')) {
            activePlayer.attack = weapon4.power;
            $(clickedCell).empty();
            dropOldWeapon(clickedCell);
            activePlayer.equippedWeapon = weapon4.name;
            $(clickedCell).removeClass('weapon4');
        } else if ($(clickedCell).hasClass('weapon0')) {
            activePlayer.attack = defaultWeapon.power;
            $(clickedCell).empty();
            dropOldWeapon(clickedCell);
            activePlayer.equippedWeapon = defaultWeapon.name;
            $(clickedCell).removeClass('weapon0');
        }
        activePlayer.updateAttack();
        // Show which weapon is equipped in UI
        activePlayer.showWeapon();
    }

    changePlayer();
    // Update new available moving options
    activePlayer.setViableMoveOptions();
    $(activePlayer.locID).addClass('activePlayerBg');
}

function changePlayer() {
    if (activePlayer === player1) {
        activePlayer = player2;
        inactivePlayer = player1;
    } else {
        activePlayer = player1;
        inactivePlayer = player2;
    }
    if (gameModeChanged === true) {
        $(`.${inactivePlayer.btnsClass}`).addClass('hidden');
        $(`.${activePlayer.btnsClass}`).removeClass('hidden');
    }
}

function dropOldWeapon(clickedCell) {
    switch (activePlayer.equippedWeapon) {
        case 'Rusty Sword':
            $(clickedCell).addClass(defaultWeapon.class);
            const img1 = $('<img>');
            img1.attr('src', 'images/default.png').addClass('weaponPic');
            img1.appendTo(clickedCell);
            img1.css('visibility', 'hidden');
            break;
        case 'Cheese':
            $(clickedCell).addClass(weapon1.class);
            const img2 = $('<img>');
            img2.attr('src', weaponPics[0]).addClass('weaponPic');
            img2.appendTo(clickedCell);
            img2.css('visibility', 'hidden');
            break;
        case 'Dagger':
            $(clickedCell).addClass(weapon2.class);
            const img3 = $('<img>');
            img3.attr('src', weaponPics[1]).addClass('weaponPic');
            img3.appendTo(clickedCell);
            img3.css('visibility', 'hidden');
            break;
        case 'Book':
            $(clickedCell).addClass(weapon3.class);
            const img4 = $('<img>');
            img4.attr('src', weaponPics[2]).addClass('weaponPic');
            img4.appendTo(clickedCell);
            img4.css('visibility', 'hidden');
            break;
        case 'Holy Stone':
            $(clickedCell).addClass(weapon4.class);
            const img5 = $('<img>');
            img5.attr('src', weaponPics[3]).addClass('weaponPic');
            img5.appendTo(clickedCell);
            img5.css('visibility', 'hidden');
            break;
    }
}
