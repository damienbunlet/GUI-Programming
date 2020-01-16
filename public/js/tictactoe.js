/*
 * Tic-Tac-Toe JS
 * Author : BUNLET Damien
 * v1.0.0
 */

var player1;
var player2;
var currentPlayer;
var players;
var emptyCase;

var result = null;
var winner = null;

var game = 0;

var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

$(document).ready(function() {
  $(".game").hide();
  $(".equality").hide();
  $(".winner").hide();
})

function players(number) {
  if (number == 1) {
    $("#player-one-name").append("Player 1");
    $("#player-two-name").append("Computer");
  }
  else if (number == 2) {
    $("#player-one-name").append("Player 1");
    $("#player-two-name").append("Player 2");
  }

  players = number;

  $(".choose-player").hide("fast");
  $(".game").show("fast");

  init();
}

function init() {

  $("#case-11").empty();
  $("#case-12").empty();
  $("#case-13").empty();

  $("#case-21").empty();
  $("#case-22").empty();
  $("#case-23").empty();

  $("#case-31").empty();
  $("#case-32").empty();
  $("#case-33").empty();

  if (game == 0 || game % 2 == 0) {
    player1 = 'X';
    player2 = 'O';
    currentPlayer = player1;
    $("#player-one-symbol").append("<i class='fas fa-times-circle fa-5x'></i>");
    $("#player-two-symbol").append("<i class='fas fa-dot-circle fa-5x'></i>");
  }
  else {
    player1 = 'O';
    player2 = 'X';
    currentPlayer = player2;
    $("#player-one-symbol").append("<i class='fas fa-dot-circle fa-5x'></i>");
    $("#player-two-symbol").append("<i class='fas fa-times-circle fa-5x'></i>");
  }

  if (currentPlayer == player1) {
    $('#player-one').addClass('current');
    $('#player-two').removeClass('current');
    $('#player-one-turn').show();
    $('#player-two-turn').hide();
  }
  else {
    $('#player-two').addClass('current');
    $('#player-one').removeClass('current');
    $('#player-one-turn').hide();
    $('#player-two-turn').show();
  }
}

function checkWin(player) {
  //Horizontal
  if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
    $("#case-11").addClass('win');
    $("#case-12").addClass('win');
    $("#case-13").addClass('win');

    winner = player;
    end = true;
  }

  if (board[1][0] == player && board[1][1] == player && board[1][2] == player) {
    $("#case-21").addClass('win');
    $("#case-22").addClass('win');
    $("#case-23").addClass('win');

    winner = player;
    end = true;
  }

  if (board[2][0] == player && board[2][1] == player && board[2][2] == player) {
    $("#case-31").addClass('win');
    $("#case-32").addClass('win');
    $("#case-33").addClass('win');

    winner = player;
    end = true;
  }

  //Vertical
  if (board[0][0] == player && board[1][0] == player && board[2][0] == player) {
    $("#case-11").addClass('win');
    $("#case-21").addClass('win');
    $("#case-31").addClass('win');

    winner = player;
    end = true;
  }

  if (board[0][1] == player && board[1][1] == player && board[2][1] == player) {
    $("#case-12").addClass('win');
    $("#case-22").addClass('win');
    $("#case-32").addClass('win');

    winner = player;
    end = true;
  }

  if (board[0][2] == player && board[1][2] == player && board[2][2] == player) {
    $("#case-13").addClass('win');
    $("#case-23").addClass('win');
    $("#case-33").addClass('win');

    winner = player;
    end = true;
  }

  //Diagonal
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
    $("#case-11").addClass('win');
    $("#case-22").addClass('win');
    $("#case-33").addClass('win');

    winner = player;
    end = true;
  }
  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
    $("#case-13").addClass('win');
    $("#case-22").addClass('win');
    $("#case-31").addClass('win');

    winner = player;
    end = true;
  }

  emptyCase = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        emptyCase++;
      }
    }
  }

  console.log('winner = ' + winner);

  if (winner == null && emptyCase == 0) {
    return 'Draw';
  }
  else if (winner != null) {
    return winner;
  }
}

function mousePressed(row, col) {
  console.log('click'+row+col);

  if (players == 1) {
    if (currentPlayer == player1) {
      draw :
      if (board[row-1][col-1] == '') {
        board[row-1][col-1] = player1;
        result = checkWin(player1);
        console.log('result = ' + result);
        draw(row, col, player1);
        currentPlayer = player2;
        $('#player-one').removeClass('current');
        $('#player-two').addClass('current');
        $('#player-one-turn').hide();
        $('#player-two-turn').show();
        console.log(board);
        if (result != null) {
          if (result == 'Draw') {
            setTimeout(function() {
              $(".game").hide();
              $(".equality").show();
            }, 2000);
          }
          else {
            setTimeout(function() {
              $(".game").hide();
              $("#winner").append("Player 1 win !");
              $(".winner").show();
            }, 2000);
            break draw;
          }
        }
        ai();
      }
    }
  }
  else {
    if (currentPlayer == player1) {
      if (board[row-1][col-1] == '') {
        board[row-1][col-1] = player1;
        result = checkWin(player1);
        console.log('result = ' + result);
        if (result != null) {
          if (result == 'Draw') {
            setTimeout(function() {
              $(".game").hide();
              $(".equality").show();
            }, 2000);
          }
          else {
            setTimeout(function() {
              $(".game").hide();
              $("#winner").append("Player 1 win !");
              $(".winner").show();
            }, 2000);
          }
        }
        draw(row, col, player1);
        currentPlayer = player2;
        $('#player-one').removeClass('current');
        $('#player-two').addClass('current');
        $('#player-one-turn').hide();
        $('#player-two-turn').show();
        console.log(board);
      }
    }
    else {
      if (board[row-1][col-1] == '') {
        board[row-1][col-1] = player2;
        result = checkWin(player2);
        console.log('result = ' + result);
        if (result != null) {
          if (result == 'Draw') {
            setTimeout(function() {
              $(".game").hide();
              $(".equality").show();
            }, 2000);
          }
          else {
            setTimeout(function() {
              $(".game").hide();
              $("#winner").append("Player 2 win !");
              $(".winner").show();
            }, 2000);
          }
        }
        draw(row, col, player2);
        currentPlayer = player1;
        $('#player-one').addClass('current');
        $('#player-two').removeClass('current');
        $('#player-one-turn').show();
        $('#player-two-turn').hide();
        console.log(board);
      }
    }
  }
}

function ai() {

  var row;
  var col;

  while (1) {
    row = Math.floor(Math.random() * 3) + 1;
    col = Math.floor(Math.random() * 3) + 1;
    console.log(row, col);
    if (board[row-1][col-1] == '') {
      break;
    }
  }

  board[row-1][col-1] = player2;
  result = checkWin(player2);
  console.log('result = ' + result);
  if (result != null) {
    if (result == 'Draw') {
      setTimeout(function() {
        $(".game").hide();
        $(".equality").show();
      }, 2000);
    }
    else {
      setTimeout(function() {
        $(".game").hide();
        $("#winner").append("Player 2 win !");
        $(".winner").show();
      }, 2000);
    }
  }
  draw(row, col, player2);
  currentPlayer = player1;
  $('#player-one').addClass('current');
  $('#player-two').removeClass('current');
  $('#player-one-turn').show();
  $('#player-two-turn').hide();
  console.log(board);
}

function draw(row, col, player) {
  if (player == 'X') {
    $("#case-"+row+col).append("<i class='fas fa-times-circle fa-3x'></i>");
  }
  else {
    $("#case-"+row+col).append("<i class='fas fa-dot-circle fa-3x'></i>");
  }
}

function reset() {
  result = null;
  winner = null;
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  $("#case-11").removeClass('win');
  $("#case-12").removeClass('win');
  $("#case-13").removeClass('win');

  $("#case-21").removeClass('win');
  $("#case-22").removeClass('win');
  $("#case-23").removeClass('win');

  $("#case-31").removeClass('win');
  $("#case-32").removeClass('win');
  $("#case-33").removeClass('win');

  $("#player-one-symbol").empty();
  $("#player-two-symbol").empty();

  $("#winner").empty();
}

function selectPlayer() {
  reset();
  $('.choose-player').show();
  $(".game").hide();
  $(".equality").hide();
  $(".winner").hide();
}

function newGame() {
  reset();
  $('.choose-player').hide();
  $(".game").show();
  $(".equality").hide();
  $(".winner").hide();

  game++;

  init();

  if (game % 2 == 1 && players == 1) {
    ai();
  }
}
