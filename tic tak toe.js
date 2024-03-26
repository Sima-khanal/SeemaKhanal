var currentPlayer = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
var statusElement = document.getElementById('status');

function makeMove(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    renderBoard();
    if (!checkWinner()) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusElement.textContent = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWinner() {
  var winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (var i = 0; i < winningConditions.length; i++) {
    var [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusElement.textContent = "Player " + currentPlayer + " wins!";
      return true;
    }
  }

  if (!board.includes('')) {
    statusElement.textContent = "It's a draw!";
    return true;
  }

  return false;
}

function renderBoard() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = board[i];
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  statusElement.textContent = "Player " + currentPlayer + "'s turn";
  renderBoard();
}
