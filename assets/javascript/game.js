var playerScore = 0;
var randomnum = 0;
var endOfGame = false;	
var playLoses = false;
var wins = 0;
var losses =0;
var winaudio = new Audio('assets/audio/win.mp3');
var loseaudio = new Audio('assets/audio/lose.mp3');

var crystal = {
	red : {
		strength :0,
		location : "assets/images/red.png"
	},

	blue : {
		strength : 0,
		location : "assets/images/blue.png"
	},
	
	yellow : {
		strength : 0,
		location : "assets/images/yellow.png"
	},

	green : {
		strength : 0,
		location : "assets/images/green.png"
	},

};


$(document).ready(function() {

	$('#red').append('<img src=' + crystal.red.location + '>');
	$('#red').click(function() {
		if (endOfGame == false) {
			playerScore = playerScore + crystal.red.strength;
			checkScore();
			$('#playerScore').html("Your Score: " + playerScore);
		};
	});


	$('#blue').append('<img src=' + crystal.blue.location + '>');
	$('#blue').click(function() {
		if (endOfGame == false) {
		playerScore=playerScore + crystal.blue.strength;
		checkScore();
		$('#playerScore').html("Your Score: " + playerScore);
		};
	});


	$('#yellow').append('<img src=' + crystal.yellow.location + '>');  
	$('#yellow').click(function() {
		if (endOfGame == false) {
		playerScore=playerScore + crystal.yellow.strength;
		checkScore();
		$('#playerScore').html("Your Score: " + playerScore);
		};
	});


	$('#green').append('<img src=' + crystal.green.location + '>');
	$('#green').click(function() {
		if (endOfGame == false) {
		playerScore=playerScore + crystal.green.strength;
		checkScore();
		$('#playerScore').html("Your Score: " + playerScore);
		};
	});


	function checkScore() {
		$('#playerScore').html(playerScore);
			if (playerScore == randomnum) {
				endOfGame = true;
				wins++;
				$('#status').text("You Win!!");
				winaudio.play();
				}

			else if (playerScore > randomnum) {
				Playerloses = true;
				endOfGame = true;
				losses++;
				$('#status').text("You Lose!");
				loseaudio.play();
				};
				
		if (endOfGame){
		$('#wins').html("Wins: " + wins);
		$('#losses').html("Losses: "+losses);
		setTimeout(startgame,3000);
		}
	}

	
	function startgame() {
		endOfGame = false;	
		playLoses = false;
		playerScore = 0

		randomnum = Math.round(Math.random() * (120 - 19)) + 19;
		crystal.red.strength = Math.round(Math.random() * (12-1)) + 1;
		crystal.blue.strength = Math.round(Math.random() * (12-1)) + 1;
		crystal.yellow.strength = Math.round(Math.random() * (12-1)) + 1;
		crystal.green.strength = Math.round(Math.random() * (12-1)) + 1;
		
		$('#randnum').html(randomnum);
		$('#wins').html("Wins: " + wins);
		$('#losses').html("Losses: " + losses);
		$('#playerScore').html("Your Score: " + playerScore);
		$('#status').html("New Game!");
		};


startgame();

});