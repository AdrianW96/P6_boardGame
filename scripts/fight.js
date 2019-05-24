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
        $('.health1').text('0');
        $('.player-1').fadeOut(300);
        // $('.player-2').addClass('winner2');
        setTimeout(function() {
            $('.player-2').addClass('pulse');
        }, 300);
        $('.mainHead').text('Player 2 won!');

        // let winner move into the middle and make bigger OR modal
        $(`.${player1.btnsClass}`).css('display', 'none');
        $(`.${player2.btnsClass}`).css('display', 'none');
    } else if (player2.health < 1) {
        $('.health2').text('0');
        $('.player-2').fadeOut(300);
        // $('.player-1').addClass('winner1');
        setTimeout(function() {
            $('.player-1').addClass('pulse');
        }, 300);
        $('.mainHead').text('Player 1 won!');

        // let winner move into the middle and make bigger OR modal
        $(`.${player1.btnsClass}`).css('display', 'none');
        $(`.${player2.btnsClass}`).css('display', 'none');
    }
}

// Move Players together for the fight scene
function moveTogether() {
    $('.player-1').animate({ left: '+=230px', height: '600px', width: '400px' }, { duration: 1000 });
    $('.player-2').animate({ right: '+=325px', height: '600px', width: '400px' }, { duration: 1000 });
}
