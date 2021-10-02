import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Start from "../Components/start";
import Board from "../Components/board";
import Settings from "../Components/settings";

const Container = styled.div`
  position: relative;
  width: 300px;
  margin: auto;
`;

const StyledMain = styled.main`
  position: relative;
  margin: 100px auto;

  > div:first-child {
    transform: rotateX(0deg) translateZ(200px);
    transition: all 0.3s ease-out;
  }

  &.playing > div:first-child {
    transform: rotateX(90deg) translateZ(200px);
  }

  &.settings > div:first-child {
    transform: rotateX(-90deg) translateZ(200px);
  }

  > div:nth-child(2) {
    transform: rotateX(-90deg) translateZ(200px);
    transition: all 0.3s ease-out;
  }

  &.playing > div:nth-child(2) {
    transform: rotateX(0deg) translateZ(200px);
  }

  > div:nth-child(3) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotateX(90deg) translateZ(200px);
    transition: all 0.3s ease-out;
  }

  &.settings > div:nth-child(3) {
    transform: rotateX(0deg) translateZ(200px);
  }
`;

export const Main = ({ menu }) => {
  return (
    <Container>
      <StyledMain className={menu}>
        <Start />
        <Board />
        <Settings />
      </StyledMain>
    </Container>
  );
};

const mapStateToProps = ({ menu }) => {
  return {
    menu,
  };
};

export default connect(mapStateToProps)(Main);
