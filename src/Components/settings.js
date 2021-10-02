import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { STORE_ACTIONS } from "../Store/store.actions";
import { MOVE_SYMBOLS } from "../constants/move-symbols";
import { PLAYERS } from "../Store/store.players";

const Title = styled.h2`
  color: var(--light);
  font-size: 28px;
  padding-bottom: 12px;
`;

const Subtitle = styled.h3`
	font-size: 18px
	padding-top: 24px
	padding-bottom: 12px
`;

const Aside = styled.div``;

const IconBtn = styled.button`
	border: none;
	background: transparent
	border-radius: 4px;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 20px;
	margin: 0 4px;

	&.selected {
		background: var(--light);
		color: var(--medium);
	}
	&.selected:hover {
		color: var(--primary);
	}
`;

const Label = styled.label`
  padding-right: 8px;
`;

const FirstMove = styled.div`
  padding-bottom: 24px;
`;

const FirstMoveRow = styled.div`
  width: 200px;
  margin: auto;
  justify-content: space-between;

  > * {
    cursor: pointer;
  }
`;

const settings = ({
  firstToMove,
  humanChar,
  computerChar,
  updateFirstToMove,
  changePlayerSymbol,
}) => {
  let humanButtons = Object.values(MOVE_SYMBOLS).map((SYMBOL, index) => (
    <IconBtn
      key={index}
      className={humanChar === SYMBOL ? "selected" : ""}
      onClick={() => changePlayerSymbol(PLAYERS.HUMAN, SYMBOL)}
    >
      <i className={SYMBOL}></i>
    </IconBtn>
  ));

  let computerButtons = Object.values(MOVE_SYMBOLS).map((SYMBOL, index) => (
    <IconBtn
      key={index}
      className={computerChar === SYMBOL ? "selected" : ""}
      onClick={() => changePlayerSymbol(PLAYERS.COMPUTER, SYMBOL)}
    >
      <i className={SYMBOL}></i>
    </IconBtn>
  ));

  return (
    <Aside>
      <Title className="color-light">SETTINGS</Title>
      <div>
        <Subtitle>First to Move</Subtitle>
        <FirstMove>
          <FirstMoveRow className="flex">
            <Label htmlFor="human">Human</Label>
            <input
              type="radio"
              name="first"
              checked={firstToMove === "human"}
              onChange={() => updateFirstToMove("human")}
            />
          </FirstMoveRow>
          <FirstMoveRow className="flex">
            <Label htmlFor="computer">Computer</Label>
            <input
              id="computer"
              type="radio"
              name="first"
              checked={firstToMove === "computer"}
              onChange={() => updateFirstToMove("computer")}
            />
          </FirstMoveRow>
        </FirstMove>

        <Subtitle>Human Symbol</Subtitle>
        <div className="flex flex-center">{humanButtons}</div>

        <Subtitle>Computer Symbol</Subtitle>
        <div className="flex flex-center">{computerButtons}</div>
      </div>
    </Aside>
  );
};

const mapStateToProps = ({ settings }) => {
  return {
    ...settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFirstToMove: (firstToMove) =>
      dispatch({
        type: STORE_ACTIONS.SET_FIRST_TO_MOVE,
        payload: {
          firstToMove,
        },
      }),
    changePlayerSymbol: (player, symbol) =>
      dispatch({
        type: STORE_ACTIONS.SET_PLAYER_SYMBOL,
        payload: {
          player,
          symbol,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(settings);
