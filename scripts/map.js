class Grid {
    constructor(rows, cols) {
        this.ROWS = rows;
        this.COLS = cols;
        this.createGrid();
    }

    createGrid() {
        const $board = $('#board');
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>').addClass('row');
            for (let col = 0; col < this.COLS; col++) {
                const $cell = $('<div>')
                    .addClass('col empty')
                    .attr('id', col + '-' + row);
                $row.append($cell);
            }
            $board.append($row);
        }
    }
}

const gameBoard = new Grid(12, 12);
