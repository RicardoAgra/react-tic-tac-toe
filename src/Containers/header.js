import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MENU_STATES } from "../constants/menu.states";
import { STORE_ACTIONS } from "../Store/store.actions";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  background: var(--dark);

  :before {
    content: "";
    position: absolute;
    left: 50%;
    width: 100vw;
    height: 100%;
    transform: translateX(-50%);
    background: var(--primary);
    z-index: -1;
  }
`;

const Button = styled.button`
  border: none;
  background: white;
  padding: 12px 22px;
  font-weight: 600;
  cursor: pointer;
  color: var(--primary-dark);
  text-transform: uppercase;
  border-radius: 2px;
  margin: 0px 4px;
`;

const TextButton = styled.button`
  padding: 12px 22px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: transparent;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    color: var(--primary);
  }
`;

const Title = styled.h2`
  color: var(--light);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  @media (max-width: 500px) {
    display: none;
  }
`;

class Header extends React.PureComponent {
  render() {
    let { menu, backToMainMenu, restartHandler, undoLastMoveHandler } =
      this.props;
    let isPlaying = menu === MENU_STATES.PLAYING;

    let restartBtn = isPlaying ? (
      <TextButton className="button" onClick={restartHandler}>
        Restart
      </TextButton>
    ) : null;

    let undoBtn = isPlaying ? (
      <TextButton className="button" onClick={undoLastMoveHandler}>
        Undo last move
      </TextButton>
    ) : null;

    let backBtn =
      menu !== MENU_STATES.MENU ? (
        <TextButton className="white" onClick={backToMainMenu}>
          Back to menu
        </TextButton>
      ) : null;

    return (
      <StyledHeader>
        {backBtn}
        <Title>Tic Tac Toe</Title>
        <div>
          {undoBtn}
          {restartBtn}
        </div>
      </StyledHeader>
    );
  }
}

const mapStateToProps = ({ menu }) => {
  return {
    menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    backToMainMenu: () =>
      dispatch({
        type: STORE_ACTIONS.NAVIGATE,
        payload: { menu: MENU_STATES.MENU },
      }),
    restartHandler: () => dispatch({ type: STORE_ACTIONS.RESTART }),
    undoLastMoveHandler: () => dispatch({ type: STORE_ACTIONS.UNDO_LAST_MOVE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
