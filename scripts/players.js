// Player Class with it's methods + properties

class Player {
    constructor(name, health, equippedWeapon, attack, location, hoverClass, btnsClass, isDefending) {
        this.name = name;
        this.health = health;
        this.equippedWeapon = equippedWeapon;
        this.attack = attack;
        this.location = location;
        this.hoverClass = hoverClass;
        this.btnsClass = btnsClass;
        this.isDefending = isDefending;
        this.placeOnBoard();
        this.showWeapon();
        this.updateAttack();
        this.updateHealth();
    }

    // Randomly place players
    placeOnBoard() {
        // Get all free cells
        let allBlocks = $('.cell');
        let $randomFreeCell;

        // Check to not spawn a player beneath another player
        do {
            $randomFreeCell = allBlocks.eq(Math.floor(Math.random() * allBlocks.length));
            const xAxisOfCurCell = $randomFreeCell.data('col');
            const yAxisOfCurCell = $randomFreeCell.data('row');
            var checkPlayerAround = checkAdjacent(xAxisOfCurCell, yAxisOfCurCell);
        } while (checkPlayerAround === false);

        $randomFreeCell.addClass(this.name).removeClass('empty cell');

        // Save coordinates of the player as property
        this.location.x = $randomFreeCell.data('col');
        this.location.y = $randomFreeCell.data('row');
        this.locID = `#${this.location.x}-${this.location.y}`;

        // Function to check if the 8 spots around the current position of the player has another player
        function checkAdjacent(x, y) {
            let $spotsAround = [$(`#${x + 1}-${y - 1}`), $(`#${x}-${y - 1}`), $(`#${x - 1}-${y - 1}`), $(`#${x - 1}-${y}`), $(`#${x - 1}-${y + 1}`), $(`#${x}-${y + 1}`), $(`#${x + 1}-${y}`), $(`#${x + 1}-${y + 1}`)];
            for (let i = 0; i < $spotsAround.length; i++) {
                if ($spotsAround[i].hasClass('player1icon') || $spotsAround[i].hasClass('player2icon')) {
                    return false;
                } else {
                    continue;
                }
            }
        }
    }

    // Show where it's possible to move
    setViableMoveOptions() {
        // Store current position for faster access
        const x = this.location.x;
        const y = this.location.y;

        // Get 3 blocks in each direction
        var $threeTop = [$(`#${x}-${y + 1}`), $(`#${x}-${y + 2}`), $(`#${x}-${y + 3}`)];
        var $threeRight = [$(`#${x + 1}-${y}`), $(`#${x + 2}-${y}`), $(`#${x + 3}-${y}`)];
        var $threeBottom = [$(`#${x}-${y - 1}`), $(`#${x}-${y - 2}`), $(`#${x}-${y - 3}`)];
        var $threeLeft = [$(`#${x - 1}-${y}`), $(`#${x - 2}-${y}`), $(`#${x - 3}-${y}`)];

        // loop through each direction and check if there's an obstacle, yes => don't check further

        for (var i = 0; i < $threeTop.length; i++) {
            if ($threeTop[i].hasClass('obstacleCell') || $threeTop[i].hasClass(inactivePlayer.name)) {
                break;
            } else {
                $threeTop[i].addClass('viable');
            }
        }

        for (var i = 0; i < $threeRight.length; i++) {
            if ($threeRight[i].hasClass('obstacleCell') || $threeRight[i].hasClass(inactivePlayer.name)) {
                break;
            } else {
                $threeRight[i].addClass('viable');
            }
        }

        for (var i = 0; i < $threeBottom.length; i++) {
            if ($threeBottom[i].hasClass('obstacleCell') || $threeBottom[i].hasClass(inactivePlayer.name)) {
                break;
            } else {
                $threeBottom[i].addClass('viable');
            }
        }

        for (var i = 0; i < $threeLeft.length; i++) {
            if ($threeLeft[i].hasClass('obstacleCell') || $threeLeft[i].hasClass(inactivePlayer.name)) {
                break;
            } else {
                $threeLeft[i].addClass('viable');
            }
        }
    }

    // function to show current attack in UI
    updateAttack() {
        if (player1 === activePlayer) {
            $('.attack1').text(this.attack);
        } else if (player2 === activePlayer) {
            $('.attack2').text(this.attack);
        }
    }

    // function to show current health in UI
    updateHealth() {
        if (player1 === activePlayer) {
            $('.health1').text(this.health);
        } else if (player2 === activePlayer) {
            $('.health2').text(this.health);
        }
    }

    // function to show currently equipped weapon in UI
    showWeapon() {
        if (player1 === activePlayer) {
            $('.weaponPlayer1').text(this.equippedWeapon);
        } else if (player2 === activePlayer) {
            $('.weaponPlayer2').text(this.equippedWeapon);
        }
    }

    // function to check if there's a player nearby to start a fight
    checkForFight(x, y) {
        let playerAround = checkForPlayer(x, y);

        if (playerAround === true) {
            fightStart();
        }

        // Helper function to check if there's a player nearby
        function checkForPlayer(x, y) {
            let $spotsAround = [$(`#${x + 1}-${y - 1}`), $(`#${x}-${y - 1}`), $(`#${x - 1}-${y - 1}`), $(`#${x - 1}-${y}`), $(`#${x - 1}-${y + 1}`), $(`#${x}-${y + 1}`), $(`#${x + 1}-${y}`), $(`#${x + 1}-${y + 1}`)];
            for (let i = 0; i < $spotsAround.length; i++) {
                if ($spotsAround[i].hasClass('player1icon') || $spotsAround[i].hasClass('player2icon')) {
                    return true;
                } else {
                    continue;
                }
            }
        }
    }
}
