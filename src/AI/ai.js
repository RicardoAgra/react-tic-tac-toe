import Board from "./board";

let DEFS = {
  computer: "o",
  human: "x",
};

const makeMove = (boardState, moveCount) => {
  switch (moveCount) {
    case 0:
      return 0;

    case 1: {
      if (boardState[4] !== "") {
        return 0;
      }
      return 4;
    }

    case 2: {
      if (boardState[1] !== "" || boardState[3] !== "") {
        return 4;
      }
      if (boardState[8] !== "") {
        return 4;
      }
      if (boardState[5] !== "") {
        return 2;
      }
      if (boardState[7] !== "") {
        return 6;
      }
      return 8;
    }

    case 9: {
      return -1;
    }

    default: {
      let winningMove = findFirstWinningMove(boardState);

      if (winningMove !== undefined) {
        return winningMove;
      }

      let winningShapeMove = findOptimalNonWinningMove(boardState);
      if (winningShapeMove !== undefined) {
        return winningShapeMove;
      }

      var moveOrderPriority = [4, 0, 2, 6, 8, 1, 3, 5, 7];
      return moveOrderPriority.find((move) => !boardState[move]) || -1;
    }
  }
};

const findFirstWinningMove = (boardState) => {
  let winningMove;

  Board.lines.find((line) => {
    let charArray = line.map((index) => boardState[index]);

    if (Board.doesCharWinLine(DEFS.computer, charArray)) {
      winningMove = line[charArray.indexOf("")];
      return true;
    }
    if (Board.doesCharWinLine(DEFS.human, charArray)) {
      winningMove = line[charArray.indexOf("")];
    }

    return false;
  });

  return winningMove;
};

const findOptimalNonWinningMove = (boardState) => {
  let shapeMove = boardState.findIndex((square, index) => {
    let newBoardState = Board.addMove(boardState, DEFS.computer, index);

    return (
      square === "" &&
      Board.countCharWinningMoves(newBoardState, DEFS.computer) >= 2
    );
  });

  let attackMove = boardState.findIndex((square, index) => {
    let newBoardState = Board.addMove(boardState, DEFS.computer, index);
    let attackMove = findFirstWinningMove(newBoardState);
    let newerBoardState = Board.addMove(newBoardState, DEFS.human, attackMove);

    return (
      square === "" &&
      attackMove !== undefined &&
      Board.countCharWinningMoves(newerBoardState, DEFS.human) < 2
    );
  });

  return [shapeMove, attackMove].find((move) => move !== -1);
};

const AI = {
  setDefs: (defs) => {
    DEFS = { ...defs };
  },
  move: makeMove,
};

export default AI;
