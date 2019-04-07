import React from "react";
import Square from "./square";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledBoard = styled.article`
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

class Board extends React.Component {
  componentWillMount() {
    if (this.props.nextAction === "computer") {
      window.setTimeout(this.props.computerMoveHandler, 0);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.boardState !== this.props.boardState) {
      return true;
    }

    return false;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.nextAction === "computer") {
      window.setTimeout(this.props.computerMoveHandler, 0);
    }
  }

  render() {
    const { boardState, lastMove, humanMoveHandler } = this.props;

    var board = boardState.map((state, index) => {
      let isLastMove = lastMove.position === index;
      return (
        <Square
          key={index}
          content={state}
          isLastMove={isLastMove}
          clickHandler={humanMoveHandler.bind(null, index)}
        />
      );
    });

    return <StyledBoard className="Board">{board}</StyledBoard>;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    humanMoveHandler: squareIndex =>
      dispatch({ type: "HUMAN_MOVE", value: squareIndex }),
    computerMoveHandler: () => dispatch({ type: "COMPUTER_MOVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
