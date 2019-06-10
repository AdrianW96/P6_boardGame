// Place obstacles and weapons on board

let weapons = ['weapon1', 'weapon2', 'weapon3', 'weapon4'];
let weaponPics = ['images/cheese.png', 'images/dragonglass.png', 'images/knowledge.png', 'images/stoneOfWisdom.png'];
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

            currentCell.addClass('obstacleCell').removeClass('empty cell');

            // delete the just populated cell from the array so it can't be multi-populated
            allBlocks.splice(randomNum, 1);
        }

        // Update empty cells variable after obstacles have been generated (i.e. so that no weapon spawns on obstacleCell)
        allBlocks = $('.cell');

        // Place weapons randomly
        for (let i = 0; i < this.numOfWeapons; i++) {
            const randomNum = Math.floor(Math.random() * allBlocks.length);
            const currentCell = allBlocks.eq(randomNum);

            currentCell
                .addClass('weaponDisplayFix')
                .addClass(weapons[i])
                .removeClass('empty cell');

            // add img to weapon cell
            const img = $('<img>')
                .attr('src', weaponPics[i])
                .addClass('weaponPic');
            img.appendTo(currentCell);

            // delete the just populated cell from the array so it can't be multi-populated
            allBlocks.splice(randomNum, 1);
        }
    }
}
