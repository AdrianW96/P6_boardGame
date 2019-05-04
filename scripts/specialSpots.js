class SpecialBlocks {
    constructor(numOfObstacles) {
        this.numOfObstacles = numOfObstacles;
        this.setSpecialBlocks();
    }

    setSpecialBlocks() {
        const allBlocks = $('.cell');

        for (let i = 0; i < this.numOfObstacles; i++) {
            const randomNum = Math.floor(Math.random() * allBlocks.length);
            const currentCell = allBlocks.eq(randomNum);
            currentCell.addClass('obstacle');
            currentCell.removeClass('empty', 'cell');
        }
    }
}
