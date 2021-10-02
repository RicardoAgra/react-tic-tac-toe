const lines: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
]

const addMove = (boardState: string[], char: string, index: number): string[] => {
  var newBoard = [...boardState];
  newBoard[index] = char;

  return newBoard;
}

const isWinner = (boardState: string[], char: string): number => {
  let some = lines.findIndex(line => {
    let aux = line.every(index => boardState[index] === char)
    return aux;
  });

  return some;
}

const hasChar = (boardState: string[], char: string): boolean => {
  return boardState.some(square => square === char);
}

const doesCharWinLine = (char: string, charArray: string[]): boolean => {
  let charCount = 0;
  let emptyCount = 0;

  charArray.forEach(charEl => {
    if (charEl === char) { charCount += 1; }
    if (charEl === "") { emptyCount += 1; }
  });

  return (emptyCount === 1 && charCount === 2);
}

const countCharWinningMoves = (boardState: string[], char: string): number => {
  let totalWinningMoves = 0;

  lines.forEach(line => {
    let charArray = line.map(index => boardState[index]);

    totalWinningMoves += doesCharWinLine(char, charArray) ? 1 : 0;
  });

  return totalWinningMoves;
}

const doesCharWin = (boardState: string[], char: string): boolean => {
  return boardState.some(square => {
    return (square !== "" && countCharWinningMoves(boardState, char) > 0);
  });
}

interface Board {
  lines: number[][];
  countCharWinningMoves(boardState: string[], char: string): number;
  doesCharWinLine(char: string, charArray: string[]): boolean;
  doesCharWin(boardState: string[], char: string): boolean;
  isWinner(boardState: string[], char: string): number;
  hasChar(boardState: string[], char: string): boolean;
  addMove(boardState: string[], char: string, index: number): string[]
}

const board: Board = {
  countCharWinningMoves: countCharWinningMoves,
  doesCharWinLine: doesCharWinLine,
  doesCharWin: doesCharWin,
  isWinner: isWinner,
  hasChar: hasChar,
  addMove: addMove,
  lines: lines,
}

export default board;