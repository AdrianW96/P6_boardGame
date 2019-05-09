class Player {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.placeOnBoard();
    }

    placeOnBoard() {
        // Get all free cells
        let allBlocks = $('.cell');
        let $randomFreeCell;

        do {
            $randomFreeCell = allBlocks.eq(Math.floor(Math.random() * allBlocks.length));
            const xAxisOfCurCell = $randomFreeCell.data('col');
            const yAxisOfCurCell = $randomFreeCell.data('row');
            var checkPlayerAround = checkAdjacent(xAxisOfCurCell, yAxisOfCurCell);
        } while (checkPlayerAround === false);

        $randomFreeCell.addClass(this.name).removeClass('empty cell');

        function checkAdjacent(x, y) {
            var $ringOne = [$(`#${x + 1}-${y - 1}`), $(`#${x}-${y - 1}`), $(`#${x - 1}-${y - 1}`), $(`#${x - 1}-${y}`), $(`#${x - 1}-${y + 1}`), $(`#${x}-${y + 1}`), $(`#${x + 1}-${y}`), $(`#${x + 1}-${y + 1}`)];
            for (let i = 0; i < $ringOne.length; i++) {
                if ($ringOne[i].hasClass('player1icon') || $ringOne[i].hasClass('player2icon')) {
                    return false;
                } else {
                    continue;
                }
            }
        }
    }
}
