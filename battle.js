function countBattleShips(board) {
  let count = 0;
  let ship = 'X';
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[r].length; c += 1) {
      let pos = board[r][c];
      if (pos === ship) {
        if ((r === 0 || board[r-1][c] !== ship) && (c === 0 || board[r][c-1] !== ship)) {
          count += 1;
        }
      }
    }
  }
  return count;
}
