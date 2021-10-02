import Board from "../AI/board";
import AI from "../AI/ai";
import { MENU_STATES } from "../constants/menu.states";
import { STORE_ACTIONS } from "./store.actions";
import { PLAYERS } from "./store.players";
import { MOVE_SYMBOLS } from "../constants/move-symbols";

const defs = {
  human: "x",
  computer: "o",
};

const initialState = {
  menu: MENU_STATES.MENU,
  boardState: Array(9).fill(""),
  lastMove: { char: "", position: null },
  nextAction: PLAYERS.COMPUTER,
  moveHistory: [],
  victory: "",
  winningLine: -1,
  settings: {
    firstToMove: PLAYERS.COMPUTER,
    humanChar: MOVE_SYMBOLS.TIMES,
    computerChar: MOVE_SYMBOLS.CIRCLE,
  },
};

const updateMoveHistory = (moveHistory, nextMove) => {
  let newMoveHistory = moveHistory.length
    ? [...moveHistory, nextMove]
    : [nextMove];
  return newMoveHistory;
};

const checkVictory = (boardState) => {
  let winningLine = Board.isWinner(boardState, defs.computer);

  if (winningLine > -1) {
    return {
      winningLine,
      victory: PLAYERS.COMPUTER,
    };
  }

  winningLine = Board.isWinner(boardState, defs.human);
  if (winningLine > -1) {
    return {
      winningLine,
      victory: PLAYERS.HUMAN,
    };
  }

  if (!Board.hasChar(boardState, "")) {
    return {
      victory: "tie",
    };
  }

  return "";
};

const isSymbolInUse = ({ player, symbol }, state) => {
  return Object.entries(state.settings).some(
    ([entryPlayer, entrySymbol]) =>
      entryPlayer !== player && entrySymbol === symbol
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ACTIONS.NAVIGATE: {
      return {
        ...state,
        menu: action.payload.menu,
      };
    }
    case STORE_ACTIONS.HUMAN_MOVE: {
      if (
        !state.victory &&
        state.nextAction === PLAYERS.HUMAN &&
        state.boardState[action.value] === ""
      ) {
        let nextBoard = Board.addMove(
          state.boardState,
          defs.human,
          action.value
        );

        return {
          ...state,
          boardState: nextBoard,
          lastMove: { position: action.value, char: state.settings.humanChar },
          nextAction: PLAYERS.COMPUTER,
          moveHistory: updateMoveHistory(state.moveHistory, action.value),
          ...checkVictory(nextBoard),
        };
      } else {
        return state;
      }
    }
    case STORE_ACTIONS.COMPUTER_MOVE: {
      let computerMove = AI.move(state.boardState, state.moveHistory.length);

      if (state.nextAction === PLAYERS.COMPUTER && computerMove > -1) {
        let nextBoard = Board.addMove(
          state.boardState,
          defs.computer,
          computerMove
        );

        return {
          ...state,
          boardState: nextBoard,
          nextAction: PLAYERS.HUMAN,
          moveHistory: updateMoveHistory(state.moveHistory, computerMove),
          victory: checkVictory(nextBoard),
          ...checkVictory(nextBoard),
        };
      } else {
        return {
          ...state,
          nextAction: PLAYERS.HUMAN,
          moveHistory: updateMoveHistory(state.moveHistory, -1),
        };
      }
    }
    case STORE_ACTIONS.UNDO_LAST_MOVE: {
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
          victory: "",
          winningLine: -1,
        };
      }
      return state;
    }
    case STORE_ACTIONS.RESTART: {
      return {
        ...initialState,
        menu: MENU_STATES.PLAYING,
        nextAction: state.settings.firstToMove,
        settings: state.settings,
      };
    }
    case STORE_ACTIONS.SET_FIRST_TO_MOVE: {
      let nextAction = state.nextAction;

      if (state.moveHistory.length === 0) {
        nextAction = action.payload.firstToMove;
      }

      return {
        ...state,
        nextAction,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };
    }
    case STORE_ACTIONS.SET_PLAYER_SYMBOL: {
      if (isSymbolInUse(action.payload, state)) {
        return state;
      }

      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.player + "Char"]: action.payload.symbol,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
