import Board from '../AI/board';
import AI from "../AI/ai";

const rand = Math.random();
const defs = {
  human: rand > 0.5 ? "x" : "o",
  computer: rand < 0.5 ? "x" : "o"
};

AI.setDefs(defs);

const genRandomID = length => {
  var text = [];
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));

  return text.join("");
};

const initialState = {
  matchId: genRandomID(20),
  boardState: Array(9).fill(""),
  lastMove: { char: "", position: null },
  nextAction: rand > 0.5 ? "humanSelect" : "computer",
  moveHistory: [],
  victory: ""
};

const updateMoveHistory = (moveHistory, nextMove) => {
  let newMoveHistory = moveHistory.length ? [...moveHistory, nextMove] : [nextMove];
  return newMoveHistory;
};

const checkVictory = boardState => {
  if (Board.isWinner(boardState, defs.computer)) {
    return "computer";
  }

  if (Board.isWinner(boardState, defs.human)) {
    return "human";
  }

  if (!Board.hasChar(boardState, "")) {
    return "tie";
  }

  return "";
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SYMBOL": {
      defs.human = action.value.human;
      defs.computer = action.value.computer;
      AI.setDefs(defs);

      return {
        ...state,
        nextAction: "human"
      };
    }
    case "HUMAN_MOVE": {
      if (!state.victory && state.nextAction === "human" && state.boardState[action.value] === "") {

        let nextBoard = Board.addMove(state.boardState, defs.human, action.value);

        return {
          ...state,
          boardState: nextBoard,
          lastMove: { position: action.value, char: defs.human },
          nextAction: "computer",
          moveHistory: updateMoveHistory(state.moveHistory, action.value),
          victory: checkVictory(nextBoard)
        };
      } else {
        return state;
      }
    }
    case "COMPUTER_MOVE": {
      let computerMove = AI.move(state.boardState, state.moveHistory.length);

      if (state.nextAction === "computer" && computerMove > -1) {
        let nextBoard = Board.addMove(state.boardState, defs.computer, computerMove);

        return {
          ...state,
          boardState: nextBoard,
          nextAction: "human",
          moveHistory: updateMoveHistory(state.moveHistory, computerMove),
          victory: checkVictory(nextBoard),
        }
      } else {
        return {
          ...state,
          nextAction: "human",
          moveHistory: updateMoveHistory(state.moveHistory, -1)
        }
      }
    }
    case "UNDO_LAST_MOVE": {
      if (state.lastMove.position !== null && state.nextAction === "human") {
        let newBoardState = [...state.boardState];
        let newMoveHistory = [...state.moveHistory];
        let newLastMove = { ...state.lastMove };

        newLastMove.position =
          newMoveHistory.length >= 4
            ? newMoveHistory[newMoveHistory.length - 4]
            : null;
        newBoardState[newMoveHistory.pop()] = "";
        newBoardState[newMoveHistory.pop()] = "";

        return {
          ...state,
          boardState: newBoardState,
          lastMove: newLastMove,
          moveHistory: newMoveHistory,
          victory: ""
        };
      }
      return state;
    }
    case "RESTART": {
      return {
        ...initialState,
        matchId: genRandomID(20),
        nextAction: Math.random() > 0.5 ? "humanSelect" : "computer"
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;