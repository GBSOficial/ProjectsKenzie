// Tabuleiro inicial de exemplo
const seaBoard = [
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ];
  
  /*
    Desenvolva seu código logo abaixo
  */
  
  function allocateShips(shipPositions, initialBoard) {
    for (let i = 0; i < shipPositions.length; i++) {
      const position = shipPositions[i];
      const row = position[0];
      const col = position[1];
      initialBoard[row][col] = "S";
    }
    return initialBoard;
  }
  
  
  function checkGuesses(guesses, mountedBoard) {
    for (let i = 0; i < guesses.length; i++) {
      const position = guesses[i];
      const row = position[0];
      const col = position[1];
      if (mountedBoard[row][col] === "S") {
        mountedBoard[row][col] = "X";
  
      }
    }
    return mountedBoard;
  }
  
  function checkWinCondition(guessedBoard) {
    for (let i = 0; i < guessedBoard.length; i++) {
      for (let j = 0; j < guessedBoard[1].length; j++) {
        if (guessedBoard[i][j] === "S") {
          return false;
        }
      }
    }
    return true;
  }