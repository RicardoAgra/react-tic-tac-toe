import React from "react";
import Title from "../Components/title";
import Square from "./square";
import { connect } from "react-redux";
import styled from "styled-components";
import { STORE_ACTIONS } from "../Store/store.actions";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const StyledBoard = styled.article`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const BackgroundDiv = styled.div`
  position: absolute;

  &.horizontal {
    left: 5px;
    width: 290px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #fbfbfb;
    top: 199px;
  }
  &.horizontal:first-of-type {
    top: 99px;
  }
  &.vertical {
    height: 290px;
    border-left: 1px solid #666;
    border-right: 1px solid #fbfbfb;
    left: 199px;
    top: 5px;
  }
  &.vertical:nth-of-type(3) {
    left: 99px;
  }
`;

const VictoryLine = styled.div`
  border-bottom: 3px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  border-radius: 2px;
`;

const PlayAgainBtn = styled.button`
  opacity: 0;
  margin-top: 40px;
  transform: translateY(15px);
  transition: transform 0.2s cubic-bezier(0.18, 0.69, 0.42, 0.94);
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 4px;
  padding: 16px 24px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  font-weight: bold;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.5s cubic-bezier(0.18, 0.69, 0.42, 0.94) 0.4s;
  }
`;

const victoryLineStyles = {
  [-1]: {
    transform: "translate(-50%, -50%) scaleX(0)",
  },
  0: { transform: "translate(-50%, -100px) scaleX(1)" },
  1: { transform: "translate(-50%, 0) scaleX(1)" },
  2: { transform: "translate(-50%, 100px) scaleX(1)" },
  3: { transform: "translate(-250px, 0) scaleX(1) rotate(90deg)" },
  4: { transform: "translate(-150px, 0) scaleX(1) rotate(90deg)" },
  5: { transform: "translate(-50px, 0) scaleX(1) rotate(90deg)" },
  6: { transform: "translate(-50%, 0) scaleX(1) rotate(45deg)" },
  7: { transform: "translate(-50%, 0) scaleX(1) rotate(315deg)" },
};

class Board extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.boardState !== this.props.boardState) {
      return true;
    }

    return false;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.nextAction === "computer") {
      setTimeout(this.props.computerMoveHandler, 500 + Math.random() * 250);
    }
  }

  render() {
    const {
      boardState,
      lastMove,
      winningLine,
      victory,
      settings,
      humanMoveHandler,
      playAgainHandler,
    } = this.props;

    let board = boardState.map((state, index) => {
      let isLastMove = lastMove.position === index;
      let content = state
        ? state === "x"
          ? settings.humanChar
          : settings.computerChar
        : "";

      return (
        <Square
          key={index}
          content={content}
          isLastMove={isLastMove}
          clickHandler={() => {
            humanMoveHandler(index);
          }}
        />
      );
    });

    return (
      <Wrapper>
        <Title />

        <StyledBoard className="Board">
          {board}
          <BackgroundDiv className="horizontal" />
          <BackgroundDiv className="horizontal" />
          <BackgroundDiv className="vertical" />
          <BackgroundDiv className="vertical" />
          <VictoryLine style={victoryLineStyles[winningLine]}></VictoryLine>
        </StyledBoard>

        <PlayAgainBtn
          className={victory ? "visible" : ""}
          onClick={playAgainHandler}
        >
          Play again
        </PlayAgainBtn>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    humanMoveHandler: (squareIndex) =>
      dispatch({ type: STORE_ACTIONS.HUMAN_MOVE, value: squareIndex }),
    computerMoveHandler: () => dispatch({ type: STORE_ACTIONS.COMPUTER_MOVE }),
    playAgainHandler: () => dispatch({ type: STORE_ACTIONS.RESTART }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
