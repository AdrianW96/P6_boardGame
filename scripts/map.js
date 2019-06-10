// Game Board Class & board eventListeners

class Grid {
    constructor(selector, rows, cols) {
        this.selector = selector;
        this.ROWS = rows;
        this.COLS = cols;
        this.createGrid();
        this.setupEventListeners();
    }

    // Create the Grid function
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

    // Grid Eventlisteners for Hovering and Clicking
    setupEventListeners() {
        const $board = $(this.selector);

        $board.on('mouseenter', '.col1', function() {
            if ($(this).hasClass('viable')) {
                $(this).addClass(activePlayer.hoverClass);
            }
        });

        $board.on('mouseleave', '.col1', function() {
            if ($(this).hasClass('viable')) {
                $(this).removeClass(activePlayer.hoverClass);
            }
        });

        $board.on('click', '.viable', move);
    }
}
