let gameOver = false;
let gameModeChanged = false;

function fightStart() {
    // Hide Board
    if (gameModeChanged === false) {
        $('#board').fadeOut(600);
        setTimeout(moveTogether(), 1000);
        $('.mainHead').text('Fight!');
        gameModeChanged = true;
    }

    $('.activePlayer').removeClass('hidden');
}

function checkGameOver() {
    if (player1.health < 1) {
        $(`.${player1.btnsClass}`).css('display', 'none');
        $(`.${player2.btnsClass}`).css('display', 'none');
        console.log('player 2 won !!!');
        gameOver = true;
    } else if (player2.health < 1) {
        $(`.${player1.btnsClass}`).css('display', 'none');
        $(`.${player2.btnsClass}`).css('display', 'none');
        console.log('player 1 won !!!');
        gameOver = true;
    }
}

// Move Players together for the fight scene
function moveTogether() {
    $('.player-1').animate({ left: '+=230px', height: '600px', width: '400px' }, { duration: 1000 });
    $('.player-2').animate({ right: '+=325px', height: '600px', width: '400px' }, { duration: 1000 });
}
