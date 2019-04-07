import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: var(--primary);
  width: 100%;
  padding: 0 10px;
`;

const Button = styled.button`
  border: 2px solid currentColor;
  background: transparent;
  padding: 10px 20px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--secondary-light);

  :hover {
    background-color: var(--primary-dark);
  }
`;

const Title = styled.h3`
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

class Header extends React.PureComponent {
  render() {
    const { matchId, restartHandler, undoLastMoveHandler } = this.props;

    return (
      <StyledHeader>
        <Button className="button" onClick={restartHandler}>
          Restart
        </Button>
        <Title>Match Id: {matchId}</Title>
        <Button className="button" onClick={undoLastMoveHandler}>
          Undo last move
        </Button>
      </StyledHeader>
    );
  }
}

const mapStateToProps = state => {
  return {
    matchId: state.matchId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restartHandler: () => dispatch({ type: "RESTART" }),
    undoLastMoveHandler: () => dispatch({ type: "UNDO_LAST_MOVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
