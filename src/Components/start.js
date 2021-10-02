import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { MENU_STATES } from "../constants/menu.states";
import { STORE_ACTIONS } from "../Store/store.actions";
import { PLAYERS } from "../Store/store.players";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h1 {
    font-size: 35px;
    text-transform: uppercase;
    padding: 5px;
    margin: 10px 0;
    cursor: pointer;
  }
`;

const start = ({ nextAction, startMatch, goToSettings }) => {
  return (
    <Container>
      <h1 onClick={() => startMatch(nextAction)}>Play</h1>
      <h1 onClick={goToSettings}>Settings</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RicardoAgra/react-tic-tac-toe"
      >
        <h1>View Project</h1>
      </a>
    </Container>
  );
};

const mapStateToProps = ({ nextAction }) => {
  return { nextAction };
};

const mapDispactchToProps = (dispatch) => {
  return {
    startMatch: (nextAction) => {
      if (nextAction === PLAYERS.COMPUTER) {
        setTimeout(() => dispatch({ type: STORE_ACTIONS.COMPUTER_MOVE }), 500);
      }

      return dispatch({
        type: STORE_ACTIONS.NAVIGATE,
        payload: { menu: MENU_STATES.PLAYING },
      });
    },
    goToSettings: () =>
      dispatch({
        type: STORE_ACTIONS.NAVIGATE,
        payload: { menu: MENU_STATES.SETTINGS },
      }),
  };
};

export default connect(mapStateToProps, mapDispactchToProps)(start);
