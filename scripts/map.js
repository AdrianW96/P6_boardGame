class Grid {
    constructor(selector, rows, cols) {
        this.selector = selector;
        this.ROWS = rows;
        this.COLS = cols;
        this.createGrid();
        this.setupEventListeners();
    }

    createGrid() {
        const $board = $(this.selector);
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>').addClass('row1');
            for (let col = 0; col < this.COLS; col++) {
                const $cell = $('<div>')
                    .addClass('col1 cell empty')
                    .attr('data-col', col)
                    .attr('data-row', row)
                    .attr('id', col + '-' + row);
                $row.append($cell);
            }
            $board.append($row);
        }
    }

    setupEventListeners() {
        const $board = $(this.selector);

        $board.on('mouseenter', '.col1', function() {
            $(this).addClass('hover');
        });

        $board.on('mouseleave', '.col1', function() {
            $(this).removeClass('hover');
        });
    }
}
