function fightStart() {
    // Hide Board
    $('#board').fadeOut(600);
    // Set timeout not working as expected?
    setTimeout(moveTogether(), 2000);
    $('.mainHead').text('Fight!');
    // Change gamemode variable so that buttons also appear when changePlayer() is called
    gameModeChanged = true;
}

// Check if a player is below 0 or less health to end game
function checkGameOver() {
    if (player1.health < 1) {
        $('.health1').text('0');
        $('.player-1').fadeOut(300);
        // $('.player-2').addClass('winner2');
        setTimeout(function() {
            $('.player-2').addClass('pulse');
        }, 300);
        $('.mainHead').text('Player 2 won!');

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
