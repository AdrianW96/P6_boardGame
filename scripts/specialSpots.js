class SpecialBlocks {
    constructor(numOfObstacles, numOfWeapons) {
        this.numOfObstacles = numOfObstacles;
        this.numOfWeapons = numOfWeapons;
        this.setSpecialBlocks();
    }

    setSpecialBlocks() {
        // Get all empty cells
        let allBlocks = $('.cell');

        // Generate Obstacles
        for (let i = 0; i < this.numOfObstacles; i++) {
            const randomNum = Math.floor(Math.random() * allBlocks.length);
            const currentCell = allBlocks.eq(randomNum);

            currentCell.addClass('obstacleCell');
            currentCell.removeClass('empty cell');

            // delete the just populated cell from the array so it can't be multi-populated
            allBlocks.splice(randomNum, 1);
        }

        // Update empty cells variable after obstacles have been generated
        allBlocks = $('.cell');

        let weapons = ['weapon1', 'weapon2', 'weapon3', 'weapon4'];
        let weaponPics = ['images/cheese.png', 'images/dragonglass.png', 'images/knowledge.png', 'images/stoneOfWisdom.png'];

        // Generate weapons
        for (let i = 0; i < this.numOfWeapons; i++) {
            const randomNum = Math.floor(Math.random() * allBlocks.length);
            const currentCell = allBlocks.eq(randomNum);

            currentCell.addClass('weaponDisplayFix').addClass(weapons[i]);

            // add img to weapon cell
            const img = $('<img>').attr('src', weaponPics[i]);
            img.appendTo(currentCell);

            // delete the just populated cell from the array so it can't be multi-populated
            allBlocks.splice(randomNum, 1);
        }
    }
}
