function countBattleShips(board) {
  let count = 0;

  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[r].length; c += 1) {
      if (startOfShip(board, r, c)) {
        count += 1;
      }
    }
  }
  return count;
}

function startOfShip(board, r, c) {
  let ship = 'X';
  let pos = board[r][c];
  let above = board[r-1] ? board[r-1][c] : undefined;
  let left = board[r][c-1] ? board[r][c-1] : undefined;

  if (pos === ship) {
    if (above !== ship && left !== ship) {
      return true;
    }
  }

  return false;
}
