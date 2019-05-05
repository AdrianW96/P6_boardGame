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

        //TODO do while loop, check if there's no other player nearby, else do again
        const randomFreeCell = allBlocks.eq(Math.floor(Math.random() * allBlocks.length));
        randomFreeCell.addClass(this.name).removeClass('empty cell');
    }
}
