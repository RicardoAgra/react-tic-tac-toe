import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-bottom: 50px;
`;

const title = ({ victory, nextAction }) => {
  const messages = {
    victory: {
      tie: "Tie!",
      human: "Human wins!",
      computer: "Computer wins!"
    },
    next: {
      humanSelect: "Select your symbol",
      human: "Turn to move: Human",
      computer: "Turn to move: Computer"
    }
  };
  let message = "";

  if (victory) {
    message = messages.victory[victory];
  } else {
    message = messages.next[nextAction];
  }

  return <StyledTitle>{message}</StyledTitle>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(React.memo(title));
