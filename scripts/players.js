class Player {
    constructor(name, health, attack, location) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.location = location;
        this.placeOnBoard();
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
            var $spotsAround = [$(`#${x + 1}-${y - 1}`), $(`#${x}-${y - 1}`), $(`#${x - 1}-${y - 1}`), $(`#${x - 1}-${y}`), $(`#${x - 1}-${y + 1}`), $(`#${x}-${y + 1}`), $(`#${x + 1}-${y}`), $(`#${x + 1}-${y + 1}`)];
            for (let i = 0; i < $spotsAround.length; i++) {
                if ($spotsAround[i].hasClass('player1icon') || $spotsAround[i].hasClass('player2icon')) {
                    return false;
                } else {
                    continue;
                }
            }
        }
    }

    setViableMoveOptions() {
        // Store current position for faster access
        const x = this.location.x;
        const y = this.location.y;
        var $threeInAllDirections = [$(`#${x + 1}-${y}`), $(`#${x + 2}-${y}`), $(`#${x + 3}-${y}`), $(`#${x - 1}-${y}`), $(`#${x - 2}-${y}`), $(`#${x - 3}-${y}`), $(`#${x}-${y + 1}`), $(`#${x}-${y + 2}`), $(`#${x}-${y + 3}`), $(`#${x}-${y - 1}`), $(`#${x}-${y - 2}`), $(`#${x}-${y - 3}`)];
        $threeInAllDirections.forEach(function(obj) {
            if (!obj.hasClass('obstacleCell')) {
                obj.addClass('viable');
            }
        });
    }
}
