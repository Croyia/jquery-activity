$(document).ready(function() {
    var $diceList = $('.img');

    var player1 = $diceList.eq(0).attr('src', diceRoll()).attr('src');
    var player2 = $diceList.eq(1).attr('src', diceRoll()).attr('src');

    var p1Value, p2Value;


    switch (player1) {
        case "images/dice1.png":
            p1Value = 1;
            break;
        case "images/dice2.png":
            p1Value = 2;
            break;
        case "images/dice3.png":
            p1Value = 3;
            break;
        case "images/dice4.png":
            p1Value = 4;
            break;
        case "images/dice5.png":
            p1Value = 5;
            break;
        default:
            p1Value = 6;
    }

    switch (player2) {
        case "images/dice1.png":
            p2Value = 1;
            break;
        case "images/dice2.png":
            p2Value = 2;
            break;
        case "images/dice3.png":
            p2Value = 3;
            break;
        case "images/dice4.png":
            p2Value = 4;
            break;
        case "images/dice5.png":
            p2Value = 5;
            break;
        default:
            p2Value = 6;
    }

    function diceRoll() {
        const randomRoll = Math.random();

        let imageRoll = '';

        if (randomRoll >= 0 && randomRoll < 1 / 6) {
            imageRoll = "images/dice1.png";
        } else if (randomRoll >= 1 / 6 && randomRoll < 2 / 6) {
            imageRoll = "images/dice2.png";
        } else if (randomRoll >= 2 / 6 && randomRoll < 3 / 6) {
            imageRoll = "images/dice3.png";
        } else if (randomRoll >= 3 / 6 && randomRoll < 4 / 6) {
            imageRoll = "images/dice4.png";
        } else if (randomRoll >= 4 / 6 && randomRoll < 5 / 6) {
            imageRoll = "images/dice5.png";
        } else {
            imageRoll = "images/dice6.png";
        }

        return imageRoll;
    }

    function result() {
        if (p1Value > p2Value) {
            $(".winner").html("Player 1 Wins!");
        } else if (p1Value < p2Value) {
            $(".winner").html("Player 2 Wins!");
        } else {
            $(".winner").html("Tie!");
        }
    }

    result();
});
